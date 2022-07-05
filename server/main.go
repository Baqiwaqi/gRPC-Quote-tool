package main

import (
	"context"
	"log"
	"net"
	"time"

	"cloud.google.com/go/firestore"
	"github.com/bawiwaqi/quote-service/db"
	pb "github.com/bawiwaqi/quote-service/pb"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

const (
	port = ":50052"
)

type QuoteServer struct {
	pb.UnimplementedQuoteToolServer
	client *firestore.Client
}

// var with errorss
var (
	ErrQuoteNotFound = status.Error(codes.NotFound, "Flight not found")
	ErrGettingQuote  = status.Error(codes.Internal, "Error getting quote")
)

func (s *QuoteServer) GetQuote(c context.Context, req *pb.QuoteService_QuoteRequest) (*pb.QuoteService_QuoteResponse, error) {
	start := time.Now()
	quote, err := db.GetQuoteFromFirestore(s.client, req.Id)
	if err != nil {
		return nil, err
	}
	log.Printf("GetQuote duration: %s", time.Since(start))
	return &pb.QuoteService_QuoteResponse{Quote: quote}, nil
}

func (s *QuoteServer) CreateQuote(c context.Context, req *pb.QuoteService_Quote) (*pb.QuoteService_QuoteCreateResponse, error) {
	start := time.Now()
	err := db.CreateQuoteInFirestore(s.client, req)
	if err != nil {
		return nil, err
	}
	log.Printf("CreateQuote duration: %s", time.Since(start))
	return &pb.QuoteService_QuoteCreateResponse{Response: "Quote succesfully created"}, nil
}

func (s *QuoteServer) UpdateQuote(c context.Context, req *pb.QuoteService_Quote) (*pb.QuoteService_QuoteUpdateResponse, error) {
	start := time.Now()
	err := db.UpdateQuoteInFirestore(s.client, req)
	if err != nil {
		return nil, err
	}
	log.Printf("UpdateQuote duration: %s", time.Since(start))
	return &pb.QuoteService_QuoteUpdateResponse{Response: "Quote succefully updated"}, nil
}

func (s *QuoteServer) DeleteQuote(c context.Context, req *pb.QuoteService_QuoteRequest) (*pb.QuoteService_QuoteDeleteResponse, error) {
	start := time.Now()
	err := db.DeleteQuoteInFirestore(s.client, req.Id)
	if err != nil {
		return nil, err
	}
	log.Printf("DeleteQuote duration: %s", time.Since(start))
	return &pb.QuoteService_QuoteDeleteResponse{Response: "Quote succefully deleted"}, nil
}

func (s *QuoteServer) GetQuoteList(c context.Context, req *pb.QuoteService_NoParams) (*pb.QuoteService_QuotesListResponse, error) {
	start := time.Now()
	quotes, err := db.GetQuoteListFromFirestore(c, s.client)
	if err != nil {
		return nil, err
	}
	log.Printf("GetQuoteList duration: %s", time.Since(start))
	return &pb.QuoteService_QuotesListResponse{Quotes: quotes}, nil
}

// for document streaming
func sendStream(doc *firestore.DocumentSnapshot, changeType pb.QuoteService_QuoteStreamResponse_ChangeType, stream pb.QuoteTool_StreamQuotesServer) error {
	var response *pb.QuoteService_QuoteStreamResponse
	var quote *pb.QuoteService_Quote
	doc.DataTo(&quote)
	quote.Id = doc.Ref.ID
	response = &pb.QuoteService_QuoteStreamResponse{
		ChangeType: changeType,
		Quote:      quote,
	}

	// response.ChangeType = changeType
	if err := stream.Send(response); err != nil {
		return err
	}
	return nil
}

func (s *QuoteServer) StreamQuotes(req *pb.QuoteService_NoParams, stream pb.QuoteTool_StreamQuotesServer) error {
	c := context.Background()
	ctx, cancel := context.WithTimeout(c, 180*time.Second)
	defer cancel()

	iter := s.client.Collection("quotes").Snapshots(ctx)
	for {
		snap, err := iter.Next()
		// DeadlineExceeded will be returned when ctx is cancelled.
		if status.Code(err) == codes.DeadlineExceeded {
			return nil
		}
		if err != nil {
			log.Printf("Snapsshots.Next: %v", err)
			return err
		}

		if snap != nil {
			// return quote that is added, modified or removed
			// for {
			// 	doc, err := snap.Documents.Next()
			// 	if err == iterator.Done {
			// 		break
			// 	}
			// 	if err != nil {
			// 		return err
			// 	}
			// 	sendStream(doc, stream)
			// }
			for _, change := range snap.Changes {
				switch change.Kind {
				case firestore.DocumentAdded:
					sendStream(change.Doc, pb.QuoteService_QuoteStreamResponse_ADDED, stream)
					log.Printf("New Quote")
				case firestore.DocumentModified:
					sendStream(change.Doc, pb.QuoteService_QuoteStreamResponse_UPDATED, stream)
					log.Printf("Modified Quote")
				case firestore.DocumentRemoved:
					sendStream(change.Doc, pb.QuoteService_QuoteStreamResponse_DELETED, stream)
					log.Printf("Removed Quote")
				}
			}
		}
	}
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	var quoteServer = &QuoteServer{}
	quoteServer.client = db.NewFirebaseClient()

	s := grpc.NewServer()
	pb.RegisterQuoteToolServer(s, quoteServer)
	log.Printf("Quote server listening on port %s", port)
	s.Serve(lis)
}

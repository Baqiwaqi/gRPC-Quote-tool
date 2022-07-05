package main

import (
	"context"
	"log"
	"net"
	"time"

	"cloud.google.com/go/firestore"
	"github.com/bawiwaqi/quote-service/db"
	pb "github.com/bawiwaqi/quote-service/pb"
	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpc_zap "github.com/grpc-ecosystem/go-grpc-middleware/logging/zap"
	"go.uber.org/zap"
	"golang.org/x/net/netutil"
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
	logger *zap.Logger
}

// var with errorss
var (
	ErrQuoteNotFound = status.Error(codes.NotFound, "Flight not found")
	ErrGettingQuote  = status.Error(codes.Internal, "Error getting quote")
)

func (s *QuoteServer) ServerUnaryInterceptor() grpc.ServerOption {
	return grpc.UnaryInterceptor(
		grpc_middleware.ChainUnaryServer(
			grpc_zap.UnaryServerInterceptor(s.logger),
		))
}

func (s *QuoteServer) GetQuote(c context.Context, req *pb.QuoteService_QuoteRequest) (*pb.QuoteService_QuoteResponse, error) {
	quote, err := db.GetQuoteFromFirestore(s.client, req.Id)
	if err != nil {
		return nil, err
	}
	return &pb.QuoteService_QuoteResponse{Quote: quote}, nil
}

func (s *QuoteServer) CreateQuote(c context.Context, req *pb.QuoteService_Quote) (*pb.QuoteService_QuoteCreateResponse, error) {
	err := db.CreateQuoteInFirestore(s.client, req)
	if err != nil {
		return nil, err
	}
	return &pb.QuoteService_QuoteCreateResponse{Response: "Quote succesfully created"}, nil
}

func (s *QuoteServer) UpdateQuote(c context.Context, req *pb.QuoteService_Quote) (*pb.QuoteService_QuoteUpdateResponse, error) {
	err := db.UpdateQuoteInFirestore(s.client, req)
	if err != nil {
		return nil, err
	}
	return &pb.QuoteService_QuoteUpdateResponse{Response: "Quote succefully updated"}, nil
}

func (s *QuoteServer) DeleteQuote(c context.Context, req *pb.QuoteService_QuoteRequest) (*pb.QuoteService_QuoteDeleteResponse, error) {
	err := db.DeleteQuoteInFirestore(s.client, req.Id)
	if err != nil {
		return nil, err
	}
	return &pb.QuoteService_QuoteDeleteResponse{Response: "Quote succefully deleted"}, nil
}

func (s *QuoteServer) GetQuoteList(c context.Context, req *pb.QuoteService_NoParams) (*pb.QuoteService_QuotesListResponse, error) {
	quotes, err := db.GetQuoteListFromFirestore(c, s.client)
	if err != nil {
		return nil, err
	}
	return &pb.QuoteService_QuotesListResponse{Quotes: quotes}, nil
}

func (s *QuoteServer) initialize() error {
	if err := s.initializeZapper(); err != nil {
		return err
	}
	if err := s.initializeFirebaseClient(); err != nil {
		return err
	}
	return nil
}

func (s *QuoteServer) initializeFirebaseClient() error {
	client, err := db.NewFirebaseClient()
	if err != nil {
		return err
	}
	s.client = client
	return nil
}

func (s *QuoteServer) initializeZapper() (err error) {
	s.logger, err = zap.NewProduction()
	if err != nil {
		return
	}
	return
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

	lis = netutil.LimitListener(lis, 10)

	var quoteServer = &QuoteServer{}
	// quoteServer.client = db.NewFirebaseClient()
	if err := quoteServer.initialize(); err != nil {
		log.Fatalf("failed to initialize: %v", err)
	}
	defer quoteServer.logger.Sync()
	defer quoteServer.client.Close()

	s := grpc.NewServer(
		quoteServer.ServerUnaryInterceptor(),
		grpc.MaxConcurrentStreams(164),
		// grpc.InTapHandle(),
	)

	pb.RegisterQuoteToolServer(s, quoteServer)
	log.Printf("Quote server listening on port %s", port)
	s.Serve(lis)
}

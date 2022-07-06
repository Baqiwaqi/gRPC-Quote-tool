package quotes

import (
	"context"
	"log"
	"time"

	"cloud.google.com/go/firestore"
	"github.com/bawiwaqi/quote-service/db"
	pb "github.com/bawiwaqi/quote-service/pb"
	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Service struct {
	pb.UnimplementedQuoteToolServer
	db  *db.FirestoreClient
	log *zap.Logger
}

func New(logger *zap.Logger, db *db.FirestoreClient) *Service {
	s := &Service{
		log: logger,
		db:  db,
	}
	return s
}

func (s *Service) GetQuote(ctx context.Context, req *pb.QuoteService_QuoteRequest) (*pb.QuoteService_QuoteResponse, error) {
	// request firestore to get the quote
	resp, err := s.db.Get(ctx, req.Id)
	if err != nil {
		return nil, err
	}
	s.log.Debug("Quote fetched", zap.String("id", resp.Id))

	// return the quote in protobuf format
	return &pb.QuoteService_QuoteResponse{Quote: resp}, nil
}

func (s *Service) CreateQuote(ctx context.Context, req *pb.QuoteService_Quote) (*pb.QuoteService_QuoteCreateResponse, error) {
	// request firestore create firestore
	resp, err := s.db.Create(ctx, req)
	if err != nil {
		return nil, err
	}
	s.log.Debug("Quote created", zap.String("id", resp))

	return &pb.QuoteService_QuoteCreateResponse{Response: "Quote succesfully created"}, nil
}

func (s *Service) UpdateQuotes(ctx context.Context, req *pb.QuoteService_Quote) (*pb.QuoteService_QuoteUpdateResponse, error) {
	// request firestore update firestore
	resp, err := s.db.Update(ctx, req)
	if err != nil {
		return nil, err
	}
	s.log.Debug("Quote updated", zap.String("id", resp))

	return &pb.QuoteService_QuoteUpdateResponse{Response: "Quote succesfully updated"}, nil
}

func (s *Service) DeleteQuote(ctx context.Context, req *pb.QuoteService_QuoteRequest) (*pb.QuoteService_QuoteDeleteResponse, error) {
	// request firestore delete firestore
	err := s.db.Delete(ctx, req.Id)
	if err != nil {
		return nil, err
	}
	s.log.Debug("Quote deleted", zap.String("id", req.Id))

	return &pb.QuoteService_QuoteDeleteResponse{Response: "Quote succesfully deleted"}, nil
}

func (s *Service) GetQuoteList(ctx context.Context, req *pb.QuoteService_NoParams) (*pb.QuoteService_QuotesListResponse, error) {
	quotes, err := s.db.GetList(ctx)
	if err != nil {
		return nil, err
	}
	s.log.Debug("Quote list fetched", zap.Int("count", len(quotes)))
	return &pb.QuoteService_QuotesListResponse{Quotes: quotes}, nil
}

func (s *Service) StreamQuotes(req *pb.QuoteService_NoParams, stream pb.QuoteTool_StreamQuotesServer) error {
	ctx := context.Background()
	ctx, cancel := context.WithTimeout(ctx, 180*time.Second)
	defer cancel()

	iter := s.db.GetSnapshots(ctx)
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

func sendStream(doc *firestore.DocumentSnapshot, changeType pb.QuoteService_QuoteStreamResponse_ChangeType, stream pb.QuoteTool_StreamQuotesServer) error {
	resp, err := createResponse(doc, changeType)
	if err != nil {
		return err
	}
	if err := stream.Send(resp); err != nil {
		return err
	}
	return nil
}

func createResponse(doc *firestore.DocumentSnapshot, changeType pb.QuoteService_QuoteStreamResponse_ChangeType) (*pb.QuoteService_QuoteStreamResponse, error) {
	var resp *pb.QuoteService_QuoteStreamResponse
	var quote *pb.QuoteService_Quote
	if err := doc.DataTo(&quote); err != nil {
		return nil, err
	}
	quote.Id = doc.Ref.ID
	resp = &pb.QuoteService_QuoteStreamResponse{
		ChangeType: changeType,
		Quote:      quote,
	}
	return resp, nil
}

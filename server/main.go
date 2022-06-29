package main

import (
	"context"
	"log"
	"net"

	"cloud.google.com/go/firestore"
	"github.com/bawiwaqi/quote-service/db"
	pb "github.com/bawiwaqi/quote-service/pb"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

const (
	port = ":50051"
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

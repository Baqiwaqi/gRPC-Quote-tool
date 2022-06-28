package db

import (
	"context"
	"log"

	"cloud.google.com/go/firestore"
	pb "github.com/bawiwaqi/quote-service/pb"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// var with errorss
var (
	ErrQuoteNotFound = status.Error(codes.NotFound, "Flight not found")
	ErrFirebase      = status.Error(codes.Internal, "Error firebase internal")
)

func GetQuoteFromFirestore(s *firestore.Client) (*pb.QuoteService_Quote, error) {
	ctx := context.Background()
	docSnap, err := s.Collection("quotes").Doc("VGWLJShytf0FzohUrbzt").Get(ctx)
	if err != nil {
		log.Printf("Error getting document: %v", err)
		return nil, ErrFirebase
	}
	if !docSnap.Exists() {
		return nil, ErrQuoteNotFound
	}
	var quote *pb.QuoteService_Quote
	docSnap.DataTo(&quote)
	return quote, nil
}

func CreateQuoteInFirestore(s *firestore.Client, quote *pb.QuoteService_Quote) error {
	ctx := context.Background()
	_, _, err := s.Collection("quotes").Add(ctx, quote)
	if err != nil {
		log.Println(err)
		return ErrFirebase
	}
	return nil
}

// update is set with merge enabled
func UpdateQuoteInFirestore(s *firestore.Client, quote *pb.QuoteService_Quote) error {
	ctx := context.Background()
	_, err := s.Collection("quotes").Doc(quote.Id).Set(ctx, quote)
	if err != nil {
		log.Println(err)
		return ErrFirebase
	}
	return nil
}

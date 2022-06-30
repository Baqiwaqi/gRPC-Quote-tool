package db

import (
	"context"
	"log"

	"cloud.google.com/go/firestore"
	pb "github.com/bawiwaqi/quote-service/pb"
	"google.golang.org/api/iterator"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// var with errorss
var (
	ErrQuoteNotFound = status.Error(codes.NotFound, "Flight not found")
	ErrFirebase      = status.Error(codes.Internal, "Error firebase internal")
)

func GetQuoteFromFirestore(s *firestore.Client, documentId string) (*pb.QuoteService_Quote, error) {
	ctx := context.Background()
	docSnap, err := s.Collection("quotes").Doc(documentId).Get(ctx)
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

func checkifQuoteExists(s *firestore.Client, documentId string) error {
	ctx := context.Background()
	_, err := s.Collection("quotes").Doc(documentId).Get(ctx)
	if err != nil {
		log.Printf("Error getting document: %v", err)
		return ErrQuoteNotFound
	}
	return nil
}

// update is set with merge enabled
func UpdateQuoteInFirestore(s *firestore.Client, quote *pb.QuoteService_Quote) error {
	ctx := context.Background()
	err := checkifQuoteExists(s, quote.Id)
	if err != nil {
		return err
	}
	// update quote with set
	_, updateError := s.Collection("quotes").Doc(quote.Id).Set(ctx, quote)
	if updateError != nil {
		log.Printf("Error getting document: %v", err)
		return ErrFirebase
	}
	return nil
}

func DeleteQuoteInFirestore(s *firestore.Client, documentId string) error {
	ctx := context.Background()
	err := checkifQuoteExists(s, documentId)
	if err != nil {
		return err
	}
	_, deleteErr := s.Collection("quotes").Doc(documentId).Delete(ctx)
	if deleteErr != nil {
		log.Printf("Error getting document: %v", err)
		return ErrQuoteNotFound
	}
	return nil
}

func GetQuoteListFromFirestore(c context.Context, s *firestore.Client) ([]*pb.QuoteService_Quote, error) {
	iter := s.Collection("quotes").Documents(c)
	var quotes []*pb.QuoteService_Quote
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			return nil, err
		}
		var quote *pb.QuoteService_Quote

		doc.DataTo(&quote)
		quote.Id = doc.Ref.ID
		quotes = append(quotes, quote)
	}
	return quotes, nil
}

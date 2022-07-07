package db

import (
	"context"

	pb "github.com/bawiwaqi/quote-service/pb"
	"google.golang.org/api/iterator"
)

func (c *FirestoreClient) Get(ctx context.Context, ID string) (*pb.QuoteService_Quote, error) {
	// document snapshot
	doc, err := c.Collection("quotes").Doc(ID).Get(ctx)
	if err != nil {
		return nil, err
	}

	// convert between firestore and protobuf
	var resp *pb.QuoteService_Quote
	if err := doc.DataTo(&resp); err != nil {
		return nil, err
	}
	resp.Id = ID
	// protobuf quote
	return resp, nil
}

func (c *FirestoreClient) Create(ctx context.Context, quote *pb.QuoteService_Quote) (string, error) {
	ref, _, err := c.Collection("quotes").Add(ctx, quote)
	if err != nil {
		return "", err
	}
	return ref.ID, nil
}

func (c *FirestoreClient) Update(ctx context.Context, quote *pb.QuoteService_Quote) (string, error) {
	// check if quote exists
	if _, err := c.Get(ctx, quote.Id); err != nil {
		return "", err
	}
	// update quote
	_, err := c.Collection("quotes").Doc(quote.Id).Set(ctx, quote)
	if err != nil {
		return "", err
	}
	// return quoteId
	return quote.Id, nil
}

func (c *FirestoreClient) Delete(ctx context.Context, ID string) error {
	_, err := c.Collection("quotes").Doc(ID).Delete(ctx)
	if err != nil {
		return err
	}
	return nil
}

func (c *FirestoreClient) GetList(ctx context.Context) (quotes []*pb.QuoteService_Quote, err error) {
	iter := c.Collection("quotes").Documents(ctx)
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

// func (c *FirestoreClient) GetSnapshots(ctx context.Context) *firestore.QuerySnapshotIterator {
// 	iter := c.Collection("quotes").Snapshots(ctx)
// 	return iter
// }

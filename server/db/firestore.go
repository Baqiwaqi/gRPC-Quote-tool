package db

import (
	"context"
	"log"

	"cloud.google.com/go/firestore"
	"go.uber.org/zap"
	"google.golang.org/api/option"
)

type FirestoreClient struct {
	log *zap.Logger
	*firestore.Client
}

func NewFirestoreClient(logger *zap.Logger) *FirestoreClient {
	ctx := context.Background()
	opt := option.WithCredentialsFile("../serviceAccountKey.json")
	client, err := firestore.NewClient(ctx, "nextjs-auth-40dd2", opt)
	if err != nil {
		log.Fatalf("Failed to create client: %v", err)
	}

	logger.Debug("Firestore client created")

	return &FirestoreClient{
		logger,
		client,
	}
}

func (c *FirestoreClient) Close() error {
	return c.Client.Close()
}

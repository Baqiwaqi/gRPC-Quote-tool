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

// // Firebase
// func NewFirebaseClient() (*firestore.Client, error) {
// 	ctx := context.Background()
// 	opt := option.WithCredentialsFile("../serviceAccountKey.json")
// 	app, err := firebase.NewApp(ctx, nil, opt)
// 	if err != nil {
// 		log.Printf("error initializing app: %v", err)
// 		return nil, err

// 	}
// 	client, err := app.Firestore(ctx)
// 	if err != nil {
// 		log.Printf("error initializing firestore: %v", err)
// 		return nil, err
// 	}
// 	log.Printf("Client succesfully created: %v", client)
// 	return client, nil
// }

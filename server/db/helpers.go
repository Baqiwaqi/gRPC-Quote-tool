package db

import (
	"context"
	"log"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"
	"google.golang.org/api/option"
)

// Firebase
func NewFirebaseClient() *firestore.Client {
	ctx := context.Background()
	opt := option.WithCredentialsFile("../serviceAccountKey.json")
	app, err := firebase.NewApp(ctx, nil, opt)
	if err != nil {
		log.Fatalf("error initializing app: %v", err)
	}
	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalf("error initializing firestore: %v", err)
	}
	log.Printf("Client succesfully created: %v", client)
	// set the client to the server
	// s.client = client
	return client
}

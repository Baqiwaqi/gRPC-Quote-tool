package db

import (
	"context"
	"log"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"
	"google.golang.org/api/option"
)

// Firebase
func NewFirebaseClient() (*firestore.Client, error) {
	ctx := context.Background()
	opt := option.WithCredentialsFile("../serviceAccountKey.json")
	app, err := firebase.NewApp(ctx, nil, opt)
	if err != nil {
		log.Printf("error initializing app: %v", err)
		return nil, err

	}
	client, err := app.Firestore(ctx)
	if err != nil {
		log.Printf("error initializing firestore: %v", err)
		return nil, err
	}
	log.Printf("Client succesfully created: %v", client)
	return client, nil
}

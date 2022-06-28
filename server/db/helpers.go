package db

import (
	"context"
	"log"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"
	"google.golang.org/api/option"
)

// create firebase client
func CreateFirebaseClient() (fs *firestore.Client, ctx context.Context) {
	ctx = context.Background()
	opt := option.WithCredentialsFile("../serviceAccountKey.json")
	app, err := firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
		log.Fatalf("error initializing app: %v\n", err)
	}
	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}
	defer client.Close()

	log.Printf("Client succesfully created: %v", client)

	return client, ctx
}

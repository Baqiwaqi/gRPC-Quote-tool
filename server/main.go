package main

import (
	"context"
	"log"
	"net"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"
	"github.com/bawiwaqi/quote-service/db"
	pb "github.com/bawiwaqi/quote-service/pb"
	"google.golang.org/api/option"
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

var customer_contact = []*pb.QuoteService_CustomerContact{
	{
		Name:  "John Doe",
		Phone: "",
		Email: "",
	},
}

var cargo = []*pb.QuoteService_Cargo{
	{Pieces: 12, Length: 100, Width: 100, Height: 100, GrossWeight: 350},
	{Pieces: 12, Length: 100, Width: 100, Height: 100, GrossWeight: 350},
}

// Mock data soon to be replaced by a database firestore
var quotes = []*pb.QuoteService_Quote{
	{
		Id:              "1",
		Carrier:         "UPS",
		Customer:        "John Doe",
		CustomerRef:     "12345",
		CustomerContact: customer_contact,
		AvailableDate:   "124368769",
		Product:         "Product 1",
		CollectFrom:     "123 Main St",
		Origin:          "AMS",
		Destination:     "LAX",
		CargoType:       "Container",
		IsDangerous:     false,
		CanBeTurned:     false,
		IsKnown:         false,
		AircraftOnly:    false,
		Description:     "This is a description",
		SizeMetric:      "centimeters",
		WeightMetric:    "kilograms",
		Cargo:           cargo,
		Rate:            &pb.QuoteService_Rate{On: "chargeable", CostMin: 120, CostRate: 1, SalesMin: 120, SalesRate: 1.48, Currency: "EUR"},
	},
}

func (s *QuoteServer) GetQuote(c context.Context, req *pb.QuoteService_QuoteRequest) (*pb.QuoteService_QuoteResponse, error) {
	quote, err := db.GetDataFromFirestore(s.client)
	if err != nil {
		return nil, err
	}
	return &pb.QuoteService_QuoteResponse{Quote: quote}, nil
}

func (s *QuoteServer) CreateQuote(c context.Context, req *pb.QuoteService_Quote) (*pb.QuoteService_QuoteListResponse, error) {
	log.Printf("Creating quote: %v", req.Id)
	quotes = append(quotes, req) // add quote to quotes array
	return &pb.QuoteService_QuoteListResponse{Quotes: quotes}, nil
}

func (s *QuoteServer) UpdateQuote(c context.Context, req *pb.QuoteService_Quote) (*pb.QuoteService_QuoteResponse, error) {
	log.Printf("Updating quote: %v", req.Id)
	for i, quote := range quotes {
		if quote.Id == req.Id {
			quotes[i] = req
			return &pb.QuoteService_QuoteResponse{Quote: quotes[i]}, nil
		}
	}
	return nil, ErrQuoteNotFound
}

func (s *QuoteServer) DeleteQuote(c context.Context, req *pb.QuoteService_QuoteRequest) (*pb.QuoteService_QuoteDeleteResponse, error) {
	log.Printf("Deleting quote: %v", req.Id)
	for i, quote := range quotes {
		if quote.Id == req.Id {
			quotes = append(quotes[:i], quotes[i+1:]...)
			return &pb.QuoteService_QuoteDeleteResponse{Response: "Quote %v is succesfully deleted!"}, nil
		}
	}
	return nil, ErrQuoteNotFound
}

// Firebase
func (s *QuoteServer) NewFirebaseClient() {
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
	s.client = client
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	var quoteServer = &QuoteServer{}
	quoteServer.NewFirebaseClient()

	s := grpc.NewServer()
	pb.RegisterQuoteToolServer(s, quoteServer)
	log.Printf("Quote server listening on port %s", port)
	s.Serve(lis)
}

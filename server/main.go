package main

import (
	"context"
	"log"
	"net"

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
}

// var with errorss
var (
	ErrQuoteNotFound = status.Error(codes.NotFound, "Flight not found")
)

// Mock data soon to be replaced by a database firestore
var quotes = []*pb.QuoteService_Quote{
	{
		Id:          "1",
		Carrier:     "UPS",
		Customer:    "John Doe",
		CustomerRef: "12345",
		CustomerContact: &pb.QuoteService_CustomerContact{
			Name:  "John Doe",
			Phone: "555-555-5555",
			Email: "test@mail.com",
		},
		AvailableDate: 124368769,
		Product:       "Product 1",
		CollectFrom:   "123 Main St",
		Origin:        "AMS",
		Destination:   "LAX",
		CargoType:     "Container",
		IsDangerous:   false,
		CanBeTurned:   false,
		IsKnown:       false,
		AircraftOnly:  false,
		Description:   "This is a description",
		SizeMetric:    "centimeters",
		WeightMetric:  "kilograms",
		Cargo: &pb.QuoteService_Cargo{
			Pieces:      12,
			Length:      100,
			Width:       100,
			Height:      100,
			GrossWeight: 350,
		},
		Rate: &pb.QuoteService_Rate{
			On:        "chargeable",
			CostMin:   120,
			CostRate:  1,
			SalesMin:  120,
			SalesRate: 1.48,
			Currency:  "EUR",
		},
	},
}

func (s *QuoteServer) GetQuote(c context.Context, req *pb.QuoteService_QuoteRequest) (*pb.QuoteService_QuoteResponse, error) {
	for _, quote := range quotes {
		if quote.Id == req.Id {
			return &pb.QuoteService_QuoteResponse{Quote: quote}, nil
		}
	}
	return nil, ErrQuoteNotFound
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	var quoteServer = &QuoteServer{}

	s := grpc.NewServer()
	pb.RegisterQuoteToolServer(s, quoteServer)
	log.Printf("Quote server listening on port %s", port)
	s.Serve(lis)
}

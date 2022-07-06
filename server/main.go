package main

import (
	"log"
	"net"

	"github.com/bawiwaqi/quote-service/db"
	pb "github.com/bawiwaqi/quote-service/pb"
	"github.com/bawiwaqi/quote-service/services/quotes"
	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpc_zap "github.com/grpc-ecosystem/go-grpc-middleware/logging/zap"
	"go.uber.org/zap"
	"golang.org/x/net/netutil"
	"google.golang.org/grpc"
)

const (
	port = ":50052"
)

type Server struct {
	// pb.UnimplementedQuoteToolServer
	client *db.FirestoreClient
	svc    *quotes.Service
	logger *zap.Logger
}

func (s *Server) ServerUnaryInterceptor() grpc.ServerOption {
	return grpc.UnaryInterceptor(
		grpc_middleware.ChainUnaryServer(
			grpc_zap.UnaryServerInterceptor(s.logger),
		))
}
func (s *Server) ServerStreamInterceptor() grpc.ServerOption {
	return grpc.StreamInterceptor(
		grpc_middleware.ChainStreamServer(
			grpc_zap.StreamServerInterceptor(s.logger),
		))
}

func (s *Server) initialize() error {
	if err := s.initializeZapper(); err != nil {
		return err
	}
	if err := s.initializeFirestoreClient(); err != nil {
		return err
	}
	if err := s.initializeService(); err != nil {
		return err
	}
	return nil
}

func (s *Server) initializeFirestoreClient() error {
	s.client = db.NewFirestoreClient(s.logger)
	return nil
}

func (s *Server) initializeZapper() (err error) {
	s.logger, err = zap.NewProduction()
	if err != nil {
		return
	}
	return
}

func (s *Server) initializeService() error {
	s.svc = quotes.New(s.logger, s.client)
	return nil
}

func (s *Server) newGrpcServer() *grpc.Server {
	server := grpc.NewServer(
		s.ServerStreamInterceptor(),
		s.ServerUnaryInterceptor(),
		grpc.MaxConcurrentStreams(164),
	)
	return server
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	lis = netutil.LimitListener(lis, 10)

	var quoteServer = &Server{}
	if err := quoteServer.initialize(); err != nil {
		log.Fatalf("failed to initialize server: %v", err)
	}

	defer quoteServer.logger.Sync()
	defer quoteServer.client.Close()

	s := quoteServer.newGrpcServer()

	pb.RegisterQuoteToolServer(s, quoteServer.svc)

	log.Printf("Quote server listening on port %s", port)
	s.Serve(lis)
}

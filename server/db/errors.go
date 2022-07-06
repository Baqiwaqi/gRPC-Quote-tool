package db

import (
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// var with errorss
var (
	ErrQuoteNotFound = status.Error(codes.NotFound, "Flight not found")
	//ErrFirebase      = status.Error(codes.Internal, "Error firebase internal")
)

// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: quote.proto

package quote_service

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// QuoteToolClient is the client API for QuoteTool service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type QuoteToolClient interface {
	// v1
	GetQuote(ctx context.Context, in *QuoteService_QuoteRequest, opts ...grpc.CallOption) (*QuoteService_QuoteResponse, error)
	CreateQuote(ctx context.Context, in *QuoteService_Quote, opts ...grpc.CallOption) (*QuoteService_QuoteCreateResponse, error)
	UpdateQuote(ctx context.Context, in *QuoteService_Quote, opts ...grpc.CallOption) (*QuoteService_QuoteUpdateResponse, error)
	DeleteQuote(ctx context.Context, in *QuoteService_QuoteRequest, opts ...grpc.CallOption) (*QuoteService_QuoteDeleteResponse, error)
}

type quoteToolClient struct {
	cc grpc.ClientConnInterface
}

func NewQuoteToolClient(cc grpc.ClientConnInterface) QuoteToolClient {
	return &quoteToolClient{cc}
}

func (c *quoteToolClient) GetQuote(ctx context.Context, in *QuoteService_QuoteRequest, opts ...grpc.CallOption) (*QuoteService_QuoteResponse, error) {
	out := new(QuoteService_QuoteResponse)
	err := c.cc.Invoke(ctx, "/quoteTool.QuoteTool/GetQuote", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *quoteToolClient) CreateQuote(ctx context.Context, in *QuoteService_Quote, opts ...grpc.CallOption) (*QuoteService_QuoteCreateResponse, error) {
	out := new(QuoteService_QuoteCreateResponse)
	err := c.cc.Invoke(ctx, "/quoteTool.QuoteTool/CreateQuote", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *quoteToolClient) UpdateQuote(ctx context.Context, in *QuoteService_Quote, opts ...grpc.CallOption) (*QuoteService_QuoteUpdateResponse, error) {
	out := new(QuoteService_QuoteUpdateResponse)
	err := c.cc.Invoke(ctx, "/quoteTool.QuoteTool/UpdateQuote", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *quoteToolClient) DeleteQuote(ctx context.Context, in *QuoteService_QuoteRequest, opts ...grpc.CallOption) (*QuoteService_QuoteDeleteResponse, error) {
	out := new(QuoteService_QuoteDeleteResponse)
	err := c.cc.Invoke(ctx, "/quoteTool.QuoteTool/DeleteQuote", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QuoteToolServer is the server API for QuoteTool service.
// All implementations must embed UnimplementedQuoteToolServer
// for forward compatibility
type QuoteToolServer interface {
	// v1
	GetQuote(context.Context, *QuoteService_QuoteRequest) (*QuoteService_QuoteResponse, error)
	CreateQuote(context.Context, *QuoteService_Quote) (*QuoteService_QuoteCreateResponse, error)
	UpdateQuote(context.Context, *QuoteService_Quote) (*QuoteService_QuoteUpdateResponse, error)
	DeleteQuote(context.Context, *QuoteService_QuoteRequest) (*QuoteService_QuoteDeleteResponse, error)
	mustEmbedUnimplementedQuoteToolServer()
}

// UnimplementedQuoteToolServer must be embedded to have forward compatible implementations.
type UnimplementedQuoteToolServer struct {
}

func (UnimplementedQuoteToolServer) GetQuote(context.Context, *QuoteService_QuoteRequest) (*QuoteService_QuoteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetQuote not implemented")
}
func (UnimplementedQuoteToolServer) CreateQuote(context.Context, *QuoteService_Quote) (*QuoteService_QuoteCreateResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateQuote not implemented")
}
func (UnimplementedQuoteToolServer) UpdateQuote(context.Context, *QuoteService_Quote) (*QuoteService_QuoteUpdateResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateQuote not implemented")
}
func (UnimplementedQuoteToolServer) DeleteQuote(context.Context, *QuoteService_QuoteRequest) (*QuoteService_QuoteDeleteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteQuote not implemented")
}
func (UnimplementedQuoteToolServer) mustEmbedUnimplementedQuoteToolServer() {}

// UnsafeQuoteToolServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to QuoteToolServer will
// result in compilation errors.
type UnsafeQuoteToolServer interface {
	mustEmbedUnimplementedQuoteToolServer()
}

func RegisterQuoteToolServer(s grpc.ServiceRegistrar, srv QuoteToolServer) {
	s.RegisterService(&QuoteTool_ServiceDesc, srv)
}

func _QuoteTool_GetQuote_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QuoteService_QuoteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QuoteToolServer).GetQuote(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/quoteTool.QuoteTool/GetQuote",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QuoteToolServer).GetQuote(ctx, req.(*QuoteService_QuoteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _QuoteTool_CreateQuote_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QuoteService_Quote)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QuoteToolServer).CreateQuote(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/quoteTool.QuoteTool/CreateQuote",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QuoteToolServer).CreateQuote(ctx, req.(*QuoteService_Quote))
	}
	return interceptor(ctx, in, info, handler)
}

func _QuoteTool_UpdateQuote_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QuoteService_Quote)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QuoteToolServer).UpdateQuote(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/quoteTool.QuoteTool/UpdateQuote",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QuoteToolServer).UpdateQuote(ctx, req.(*QuoteService_Quote))
	}
	return interceptor(ctx, in, info, handler)
}

func _QuoteTool_DeleteQuote_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QuoteService_QuoteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QuoteToolServer).DeleteQuote(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/quoteTool.QuoteTool/DeleteQuote",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QuoteToolServer).DeleteQuote(ctx, req.(*QuoteService_QuoteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// QuoteTool_ServiceDesc is the grpc.ServiceDesc for QuoteTool service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var QuoteTool_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "quoteTool.QuoteTool",
	HandlerType: (*QuoteToolServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetQuote",
			Handler:    _QuoteTool_GetQuote_Handler,
		},
		{
			MethodName: "CreateQuote",
			Handler:    _QuoteTool_CreateQuote_Handler,
		},
		{
			MethodName: "UpdateQuote",
			Handler:    _QuoteTool_UpdateQuote_Handler,
		},
		{
			MethodName: "DeleteQuote",
			Handler:    _QuoteTool_DeleteQuote_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "quote.proto",
}

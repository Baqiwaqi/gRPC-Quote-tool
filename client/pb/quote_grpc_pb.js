// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var quote_pb = require('./quote_pb.js');

function serialize_quoteTool_QuoteService_NoParams(arg) {
  if (!(arg instanceof quote_pb.QuoteService.NoParams)) {
    throw new Error('Expected argument of type quoteTool.QuoteService.NoParams');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_quoteTool_QuoteService_NoParams(buffer_arg) {
  return quote_pb.QuoteService.NoParams.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_quoteTool_QuoteService_QuoteRequest(arg) {
  if (!(arg instanceof quote_pb.QuoteService.QuoteRequest)) {
    throw new Error('Expected argument of type quoteTool.QuoteService.QuoteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_quoteTool_QuoteService_QuoteRequest(buffer_arg) {
  return quote_pb.QuoteService.QuoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_quoteTool_QuoteService_QuoteResponse(arg) {
  if (!(arg instanceof quote_pb.QuoteService.QuoteResponse)) {
    throw new Error('Expected argument of type quoteTool.QuoteService.QuoteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_quoteTool_QuoteService_QuoteResponse(buffer_arg) {
  return quote_pb.QuoteService.QuoteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var QuoteToolService = exports.QuoteToolService = {
  // v1
getQuote: {
    path: '/quoteTool.QuoteTool/GetQuote',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.QuoteService.QuoteRequest,
    responseType: quote_pb.QuoteService.QuoteResponse,
    requestSerialize: serialize_quoteTool_QuoteService_QuoteRequest,
    requestDeserialize: deserialize_quoteTool_QuoteService_QuoteRequest,
    responseSerialize: serialize_quoteTool_QuoteService_QuoteResponse,
    responseDeserialize: deserialize_quoteTool_QuoteService_QuoteResponse,
  },
  createQuote: {
    path: '/quoteTool.QuoteTool/CreateQuote',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.QuoteService.NoParams,
    responseType: quote_pb.QuoteService.QuoteResponse,
    requestSerialize: serialize_quoteTool_QuoteService_NoParams,
    requestDeserialize: deserialize_quoteTool_QuoteService_NoParams,
    responseSerialize: serialize_quoteTool_QuoteService_QuoteResponse,
    responseDeserialize: deserialize_quoteTool_QuoteService_QuoteResponse,
  },
  updateQuote: {
    path: '/quoteTool.QuoteTool/UpdateQuote',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.QuoteService.QuoteRequest,
    responseType: quote_pb.QuoteService.QuoteResponse,
    requestSerialize: serialize_quoteTool_QuoteService_QuoteRequest,
    requestDeserialize: deserialize_quoteTool_QuoteService_QuoteRequest,
    responseSerialize: serialize_quoteTool_QuoteService_QuoteResponse,
    responseDeserialize: deserialize_quoteTool_QuoteService_QuoteResponse,
  },
  deleteQuote: {
    path: '/quoteTool.QuoteTool/DeleteQuote',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.QuoteService.QuoteRequest,
    responseType: quote_pb.QuoteService.QuoteResponse,
    requestSerialize: serialize_quoteTool_QuoteService_QuoteRequest,
    requestDeserialize: deserialize_quoteTool_QuoteService_QuoteRequest,
    responseSerialize: serialize_quoteTool_QuoteService_QuoteResponse,
    responseDeserialize: deserialize_quoteTool_QuoteService_QuoteResponse,
  },
  // v2
// listQuotes
// streamQuotes
};

exports.QuoteToolClient = grpc.makeGenericClientConstructor(QuoteToolService);

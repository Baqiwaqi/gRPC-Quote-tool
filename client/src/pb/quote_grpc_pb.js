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

function serialize_quoteTool_QuoteService_Quote(arg) {
  if (!(arg instanceof quote_pb.QuoteService.Quote)) {
    throw new Error('Expected argument of type quoteTool.QuoteService.Quote');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_quoteTool_QuoteService_Quote(buffer_arg) {
  return quote_pb.QuoteService.Quote.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_quoteTool_QuoteService_QuoteCreateResponse(arg) {
  if (!(arg instanceof quote_pb.QuoteService.QuoteCreateResponse)) {
    throw new Error('Expected argument of type quoteTool.QuoteService.QuoteCreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_quoteTool_QuoteService_QuoteCreateResponse(buffer_arg) {
  return quote_pb.QuoteService.QuoteCreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_quoteTool_QuoteService_QuoteDeleteResponse(arg) {
  if (!(arg instanceof quote_pb.QuoteService.QuoteDeleteResponse)) {
    throw new Error('Expected argument of type quoteTool.QuoteService.QuoteDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_quoteTool_QuoteService_QuoteDeleteResponse(buffer_arg) {
  return quote_pb.QuoteService.QuoteDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_quoteTool_QuoteService_QuoteUpdateResponse(arg) {
  if (!(arg instanceof quote_pb.QuoteService.QuoteUpdateResponse)) {
    throw new Error('Expected argument of type quoteTool.QuoteService.QuoteUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_quoteTool_QuoteService_QuoteUpdateResponse(buffer_arg) {
  return quote_pb.QuoteService.QuoteUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_quoteTool_QuoteService_QuotesListResponse(arg) {
  if (!(arg instanceof quote_pb.QuoteService.QuotesListResponse)) {
    throw new Error('Expected argument of type quoteTool.QuoteService.QuotesListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_quoteTool_QuoteService_QuotesListResponse(buffer_arg) {
  return quote_pb.QuoteService.QuotesListResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
    requestType: quote_pb.QuoteService.Quote,
    responseType: quote_pb.QuoteService.QuoteCreateResponse,
    requestSerialize: serialize_quoteTool_QuoteService_Quote,
    requestDeserialize: deserialize_quoteTool_QuoteService_Quote,
    responseSerialize: serialize_quoteTool_QuoteService_QuoteCreateResponse,
    responseDeserialize: deserialize_quoteTool_QuoteService_QuoteCreateResponse,
  },
  updateQuote: {
    path: '/quoteTool.QuoteTool/UpdateQuote',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.QuoteService.Quote,
    responseType: quote_pb.QuoteService.QuoteUpdateResponse,
    requestSerialize: serialize_quoteTool_QuoteService_Quote,
    requestDeserialize: deserialize_quoteTool_QuoteService_Quote,
    responseSerialize: serialize_quoteTool_QuoteService_QuoteUpdateResponse,
    responseDeserialize: deserialize_quoteTool_QuoteService_QuoteUpdateResponse,
  },
  deleteQuote: {
    path: '/quoteTool.QuoteTool/DeleteQuote',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.QuoteService.QuoteRequest,
    responseType: quote_pb.QuoteService.QuoteDeleteResponse,
    requestSerialize: serialize_quoteTool_QuoteService_QuoteRequest,
    requestDeserialize: deserialize_quoteTool_QuoteService_QuoteRequest,
    responseSerialize: serialize_quoteTool_QuoteService_QuoteDeleteResponse,
    responseDeserialize: deserialize_quoteTool_QuoteService_QuoteDeleteResponse,
  },
  // v2
getQuoteList: {
    path: '/quoteTool.QuoteTool/GetQuoteList',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.QuoteService.NoParams,
    responseType: quote_pb.QuoteService.QuotesListResponse,
    requestSerialize: serialize_quoteTool_QuoteService_NoParams,
    requestDeserialize: deserialize_quoteTool_QuoteService_NoParams,
    responseSerialize: serialize_quoteTool_QuoteService_QuotesListResponse,
    responseDeserialize: deserialize_quoteTool_QuoteService_QuotesListResponse,
  },
  streamQuotes: {
    path: '/quoteTool.QuoteTool/StreamQuotes',
    requestStream: false,
    responseStream: true,
    requestType: quote_pb.QuoteService.NoParams,
    responseType: quote_pb.QuoteService.Quote,
    requestSerialize: serialize_quoteTool_QuoteService_NoParams,
    requestDeserialize: deserialize_quoteTool_QuoteService_NoParams,
    responseSerialize: serialize_quoteTool_QuoteService_Quote,
    responseDeserialize: deserialize_quoteTool_QuoteService_Quote,
  },
  // streamQuotes
};

exports.QuoteToolClient = grpc.makeGenericClientConstructor(QuoteToolService);

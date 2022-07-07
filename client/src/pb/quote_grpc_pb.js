// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var quote_pb = require('./quote_pb.js');

function serialize_quote_tool_QuoteService_NoParams(arg) {
  if (!(arg instanceof quote_pb.QuoteService.NoParams)) {
    throw new Error('Expected argument of type quote.tool.QuoteService.NoParams');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_quote_tool_QuoteService_NoParams(buffer_arg) {
  return quote_pb.QuoteService.NoParams.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_quote_tool_QuoteService_Quote(arg) {
  if (!(arg instanceof quote_pb.QuoteService.Quote)) {
    throw new Error('Expected argument of type quote.tool.QuoteService.Quote');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_quote_tool_QuoteService_Quote(buffer_arg) {
  return quote_pb.QuoteService.Quote.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_quote_tool_QuoteService_QuoteDeleteResponse(arg) {
  if (!(arg instanceof quote_pb.QuoteService.QuoteDeleteResponse)) {
    throw new Error('Expected argument of type quote.tool.QuoteService.QuoteDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_quote_tool_QuoteService_QuoteDeleteResponse(buffer_arg) {
  return quote_pb.QuoteService.QuoteDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_quote_tool_QuoteService_QuoteIdResponse(arg) {
  if (!(arg instanceof quote_pb.QuoteService.QuoteIdResponse)) {
    throw new Error('Expected argument of type quote.tool.QuoteService.QuoteIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_quote_tool_QuoteService_QuoteIdResponse(buffer_arg) {
  return quote_pb.QuoteService.QuoteIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_quote_tool_QuoteService_QuoteRequest(arg) {
  if (!(arg instanceof quote_pb.QuoteService.QuoteRequest)) {
    throw new Error('Expected argument of type quote.tool.QuoteService.QuoteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_quote_tool_QuoteService_QuoteRequest(buffer_arg) {
  return quote_pb.QuoteService.QuoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_quote_tool_QuoteService_QuoteResponse(arg) {
  if (!(arg instanceof quote_pb.QuoteService.QuoteResponse)) {
    throw new Error('Expected argument of type quote.tool.QuoteService.QuoteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_quote_tool_QuoteService_QuoteResponse(buffer_arg) {
  return quote_pb.QuoteService.QuoteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_quote_tool_QuoteService_QuoteStreamResponse(arg) {
  if (!(arg instanceof quote_pb.QuoteService.QuoteStreamResponse)) {
    throw new Error('Expected argument of type quote.tool.QuoteService.QuoteStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_quote_tool_QuoteService_QuoteStreamResponse(buffer_arg) {
  return quote_pb.QuoteService.QuoteStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_quote_tool_QuoteService_QuotesListResponse(arg) {
  if (!(arg instanceof quote_pb.QuoteService.QuotesListResponse)) {
    throw new Error('Expected argument of type quote.tool.QuoteService.QuotesListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_quote_tool_QuoteService_QuotesListResponse(buffer_arg) {
  return quote_pb.QuoteService.QuotesListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var QuoteToolService = exports.QuoteToolService = {
  // v1
getQuote: {
    path: '/quote.tool.QuoteTool/GetQuote',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.QuoteService.QuoteRequest,
    responseType: quote_pb.QuoteService.QuoteResponse,
    requestSerialize: serialize_quote_tool_QuoteService_QuoteRequest,
    requestDeserialize: deserialize_quote_tool_QuoteService_QuoteRequest,
    responseSerialize: serialize_quote_tool_QuoteService_QuoteResponse,
    responseDeserialize: deserialize_quote_tool_QuoteService_QuoteResponse,
  },
  createQuote: {
    path: '/quote.tool.QuoteTool/CreateQuote',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.QuoteService.Quote,
    responseType: quote_pb.QuoteService.QuoteIdResponse,
    requestSerialize: serialize_quote_tool_QuoteService_Quote,
    requestDeserialize: deserialize_quote_tool_QuoteService_Quote,
    responseSerialize: serialize_quote_tool_QuoteService_QuoteIdResponse,
    responseDeserialize: deserialize_quote_tool_QuoteService_QuoteIdResponse,
  },
  updateQuote: {
    path: '/quote.tool.QuoteTool/UpdateQuote',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.QuoteService.Quote,
    responseType: quote_pb.QuoteService.QuoteIdResponse,
    requestSerialize: serialize_quote_tool_QuoteService_Quote,
    requestDeserialize: deserialize_quote_tool_QuoteService_Quote,
    responseSerialize: serialize_quote_tool_QuoteService_QuoteIdResponse,
    responseDeserialize: deserialize_quote_tool_QuoteService_QuoteIdResponse,
  },
  deleteQuote: {
    path: '/quote.tool.QuoteTool/DeleteQuote',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.QuoteService.QuoteRequest,
    responseType: quote_pb.QuoteService.QuoteDeleteResponse,
    requestSerialize: serialize_quote_tool_QuoteService_QuoteRequest,
    requestDeserialize: deserialize_quote_tool_QuoteService_QuoteRequest,
    responseSerialize: serialize_quote_tool_QuoteService_QuoteDeleteResponse,
    responseDeserialize: deserialize_quote_tool_QuoteService_QuoteDeleteResponse,
  },
  // v2
getQuoteList: {
    path: '/quote.tool.QuoteTool/GetQuoteList',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.QuoteService.NoParams,
    responseType: quote_pb.QuoteService.QuotesListResponse,
    requestSerialize: serialize_quote_tool_QuoteService_NoParams,
    requestDeserialize: deserialize_quote_tool_QuoteService_NoParams,
    responseSerialize: serialize_quote_tool_QuoteService_QuotesListResponse,
    responseDeserialize: deserialize_quote_tool_QuoteService_QuotesListResponse,
  },
  streamQuotes: {
    path: '/quote.tool.QuoteTool/StreamQuotes',
    requestStream: false,
    responseStream: true,
    requestType: quote_pb.QuoteService.NoParams,
    responseType: quote_pb.QuoteService.QuoteStreamResponse,
    requestSerialize: serialize_quote_tool_QuoteService_NoParams,
    requestDeserialize: deserialize_quote_tool_QuoteService_NoParams,
    responseSerialize: serialize_quote_tool_QuoteService_QuoteStreamResponse,
    responseDeserialize: deserialize_quote_tool_QuoteService_QuoteStreamResponse,
  },
};

exports.QuoteToolClient = grpc.makeGenericClientConstructor(QuoteToolService);

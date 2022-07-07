/**
 * @fileoverview gRPC-Web generated client stub for quote.tool
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.quote = {};
proto.quote.tool = require('./quote_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.quote.tool.QuoteToolClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.quote.tool.QuoteToolPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.quote.tool.QuoteService.QuoteRequest,
 *   !proto.quote.tool.QuoteService.QuoteResponse>}
 */
const methodDescriptor_QuoteTool_GetQuote = new grpc.web.MethodDescriptor(
  '/quote.tool.QuoteTool/GetQuote',
  grpc.web.MethodType.UNARY,
  proto.quote.tool.QuoteService.QuoteRequest,
  proto.quote.tool.QuoteService.QuoteResponse,
  /**
   * @param {!proto.quote.tool.QuoteService.QuoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.quote.tool.QuoteService.QuoteResponse.deserializeBinary
);


/**
 * @param {!proto.quote.tool.QuoteService.QuoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.quote.tool.QuoteService.QuoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.quote.tool.QuoteService.QuoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.quote.tool.QuoteToolClient.prototype.getQuote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/quote.tool.QuoteTool/GetQuote',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_GetQuote,
      callback);
};


/**
 * @param {!proto.quote.tool.QuoteService.QuoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.quote.tool.QuoteService.QuoteResponse>}
 *     Promise that resolves to the response
 */
proto.quote.tool.QuoteToolPromiseClient.prototype.getQuote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/quote.tool.QuoteTool/GetQuote',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_GetQuote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.quote.tool.QuoteService.Quote,
 *   !proto.quote.tool.QuoteService.QuoteIdResponse>}
 */
const methodDescriptor_QuoteTool_CreateQuote = new grpc.web.MethodDescriptor(
  '/quote.tool.QuoteTool/CreateQuote',
  grpc.web.MethodType.UNARY,
  proto.quote.tool.QuoteService.Quote,
  proto.quote.tool.QuoteService.QuoteIdResponse,
  /**
   * @param {!proto.quote.tool.QuoteService.Quote} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.quote.tool.QuoteService.QuoteIdResponse.deserializeBinary
);


/**
 * @param {!proto.quote.tool.QuoteService.Quote} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.quote.tool.QuoteService.QuoteIdResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.quote.tool.QuoteService.QuoteIdResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.quote.tool.QuoteToolClient.prototype.createQuote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/quote.tool.QuoteTool/CreateQuote',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_CreateQuote,
      callback);
};


/**
 * @param {!proto.quote.tool.QuoteService.Quote} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.quote.tool.QuoteService.QuoteIdResponse>}
 *     Promise that resolves to the response
 */
proto.quote.tool.QuoteToolPromiseClient.prototype.createQuote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/quote.tool.QuoteTool/CreateQuote',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_CreateQuote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.quote.tool.QuoteService.Quote,
 *   !proto.quote.tool.QuoteService.QuoteIdResponse>}
 */
const methodDescriptor_QuoteTool_UpdateQuote = new grpc.web.MethodDescriptor(
  '/quote.tool.QuoteTool/UpdateQuote',
  grpc.web.MethodType.UNARY,
  proto.quote.tool.QuoteService.Quote,
  proto.quote.tool.QuoteService.QuoteIdResponse,
  /**
   * @param {!proto.quote.tool.QuoteService.Quote} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.quote.tool.QuoteService.QuoteIdResponse.deserializeBinary
);


/**
 * @param {!proto.quote.tool.QuoteService.Quote} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.quote.tool.QuoteService.QuoteIdResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.quote.tool.QuoteService.QuoteIdResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.quote.tool.QuoteToolClient.prototype.updateQuote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/quote.tool.QuoteTool/UpdateQuote',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_UpdateQuote,
      callback);
};


/**
 * @param {!proto.quote.tool.QuoteService.Quote} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.quote.tool.QuoteService.QuoteIdResponse>}
 *     Promise that resolves to the response
 */
proto.quote.tool.QuoteToolPromiseClient.prototype.updateQuote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/quote.tool.QuoteTool/UpdateQuote',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_UpdateQuote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.quote.tool.QuoteService.QuoteRequest,
 *   !proto.quote.tool.QuoteService.QuoteDeleteResponse>}
 */
const methodDescriptor_QuoteTool_DeleteQuote = new grpc.web.MethodDescriptor(
  '/quote.tool.QuoteTool/DeleteQuote',
  grpc.web.MethodType.UNARY,
  proto.quote.tool.QuoteService.QuoteRequest,
  proto.quote.tool.QuoteService.QuoteDeleteResponse,
  /**
   * @param {!proto.quote.tool.QuoteService.QuoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.quote.tool.QuoteService.QuoteDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.quote.tool.QuoteService.QuoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.quote.tool.QuoteService.QuoteDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.quote.tool.QuoteService.QuoteDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.quote.tool.QuoteToolClient.prototype.deleteQuote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/quote.tool.QuoteTool/DeleteQuote',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_DeleteQuote,
      callback);
};


/**
 * @param {!proto.quote.tool.QuoteService.QuoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.quote.tool.QuoteService.QuoteDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.quote.tool.QuoteToolPromiseClient.prototype.deleteQuote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/quote.tool.QuoteTool/DeleteQuote',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_DeleteQuote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.quote.tool.QuoteService.NoParams,
 *   !proto.quote.tool.QuoteService.QuotesListResponse>}
 */
const methodDescriptor_QuoteTool_GetQuoteList = new grpc.web.MethodDescriptor(
  '/quote.tool.QuoteTool/GetQuoteList',
  grpc.web.MethodType.UNARY,
  proto.quote.tool.QuoteService.NoParams,
  proto.quote.tool.QuoteService.QuotesListResponse,
  /**
   * @param {!proto.quote.tool.QuoteService.NoParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.quote.tool.QuoteService.QuotesListResponse.deserializeBinary
);


/**
 * @param {!proto.quote.tool.QuoteService.NoParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.quote.tool.QuoteService.QuotesListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.quote.tool.QuoteService.QuotesListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.quote.tool.QuoteToolClient.prototype.getQuoteList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/quote.tool.QuoteTool/GetQuoteList',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_GetQuoteList,
      callback);
};


/**
 * @param {!proto.quote.tool.QuoteService.NoParams} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.quote.tool.QuoteService.QuotesListResponse>}
 *     Promise that resolves to the response
 */
proto.quote.tool.QuoteToolPromiseClient.prototype.getQuoteList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/quote.tool.QuoteTool/GetQuoteList',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_GetQuoteList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.quote.tool.QuoteService.NoParams,
 *   !proto.quote.tool.QuoteService.QuoteStreamResponse>}
 */
const methodDescriptor_QuoteTool_StreamQuotes = new grpc.web.MethodDescriptor(
  '/quote.tool.QuoteTool/StreamQuotes',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.quote.tool.QuoteService.NoParams,
  proto.quote.tool.QuoteService.QuoteStreamResponse,
  /**
   * @param {!proto.quote.tool.QuoteService.NoParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.quote.tool.QuoteService.QuoteStreamResponse.deserializeBinary
);


/**
 * @param {!proto.quote.tool.QuoteService.NoParams} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.quote.tool.QuoteService.QuoteStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.quote.tool.QuoteToolClient.prototype.streamQuotes =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/quote.tool.QuoteTool/StreamQuotes',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_StreamQuotes);
};


/**
 * @param {!proto.quote.tool.QuoteService.NoParams} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.quote.tool.QuoteService.QuoteStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.quote.tool.QuoteToolPromiseClient.prototype.streamQuotes =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/quote.tool.QuoteTool/StreamQuotes',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_StreamQuotes);
};


module.exports = proto.quote.tool;


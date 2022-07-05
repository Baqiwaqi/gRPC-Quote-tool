/**
 * @fileoverview gRPC-Web generated client stub for quoteTool
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.quoteTool = require('./quote_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.quoteTool.QuoteToolClient =
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
proto.quoteTool.QuoteToolPromiseClient =
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
 *   !proto.quoteTool.QuoteService.QuoteRequest,
 *   !proto.quoteTool.QuoteService.QuoteResponse>}
 */
const methodDescriptor_QuoteTool_GetQuote = new grpc.web.MethodDescriptor(
  '/quoteTool.QuoteTool/GetQuote',
  grpc.web.MethodType.UNARY,
  proto.quoteTool.QuoteService.QuoteRequest,
  proto.quoteTool.QuoteService.QuoteResponse,
  /**
   * @param {!proto.quoteTool.QuoteService.QuoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.quoteTool.QuoteService.QuoteResponse.deserializeBinary
);


/**
 * @param {!proto.quoteTool.QuoteService.QuoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.quoteTool.QuoteService.QuoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.quoteTool.QuoteService.QuoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.quoteTool.QuoteToolClient.prototype.getQuote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/quoteTool.QuoteTool/GetQuote',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_GetQuote,
      callback);
};


/**
 * @param {!proto.quoteTool.QuoteService.QuoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.quoteTool.QuoteService.QuoteResponse>}
 *     Promise that resolves to the response
 */
proto.quoteTool.QuoteToolPromiseClient.prototype.getQuote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/quoteTool.QuoteTool/GetQuote',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_GetQuote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.quoteTool.QuoteService.Quote,
 *   !proto.quoteTool.QuoteService.QuoteCreateResponse>}
 */
const methodDescriptor_QuoteTool_CreateQuote = new grpc.web.MethodDescriptor(
  '/quoteTool.QuoteTool/CreateQuote',
  grpc.web.MethodType.UNARY,
  proto.quoteTool.QuoteService.Quote,
  proto.quoteTool.QuoteService.QuoteCreateResponse,
  /**
   * @param {!proto.quoteTool.QuoteService.Quote} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.quoteTool.QuoteService.QuoteCreateResponse.deserializeBinary
);


/**
 * @param {!proto.quoteTool.QuoteService.Quote} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.quoteTool.QuoteService.QuoteCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.quoteTool.QuoteService.QuoteCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.quoteTool.QuoteToolClient.prototype.createQuote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/quoteTool.QuoteTool/CreateQuote',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_CreateQuote,
      callback);
};


/**
 * @param {!proto.quoteTool.QuoteService.Quote} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.quoteTool.QuoteService.QuoteCreateResponse>}
 *     Promise that resolves to the response
 */
proto.quoteTool.QuoteToolPromiseClient.prototype.createQuote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/quoteTool.QuoteTool/CreateQuote',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_CreateQuote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.quoteTool.QuoteService.Quote,
 *   !proto.quoteTool.QuoteService.QuoteUpdateResponse>}
 */
const methodDescriptor_QuoteTool_UpdateQuote = new grpc.web.MethodDescriptor(
  '/quoteTool.QuoteTool/UpdateQuote',
  grpc.web.MethodType.UNARY,
  proto.quoteTool.QuoteService.Quote,
  proto.quoteTool.QuoteService.QuoteUpdateResponse,
  /**
   * @param {!proto.quoteTool.QuoteService.Quote} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.quoteTool.QuoteService.QuoteUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.quoteTool.QuoteService.Quote} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.quoteTool.QuoteService.QuoteUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.quoteTool.QuoteService.QuoteUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.quoteTool.QuoteToolClient.prototype.updateQuote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/quoteTool.QuoteTool/UpdateQuote',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_UpdateQuote,
      callback);
};


/**
 * @param {!proto.quoteTool.QuoteService.Quote} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.quoteTool.QuoteService.QuoteUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.quoteTool.QuoteToolPromiseClient.prototype.updateQuote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/quoteTool.QuoteTool/UpdateQuote',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_UpdateQuote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.quoteTool.QuoteService.QuoteRequest,
 *   !proto.quoteTool.QuoteService.QuoteDeleteResponse>}
 */
const methodDescriptor_QuoteTool_DeleteQuote = new grpc.web.MethodDescriptor(
  '/quoteTool.QuoteTool/DeleteQuote',
  grpc.web.MethodType.UNARY,
  proto.quoteTool.QuoteService.QuoteRequest,
  proto.quoteTool.QuoteService.QuoteDeleteResponse,
  /**
   * @param {!proto.quoteTool.QuoteService.QuoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.quoteTool.QuoteService.QuoteDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.quoteTool.QuoteService.QuoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.quoteTool.QuoteService.QuoteDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.quoteTool.QuoteService.QuoteDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.quoteTool.QuoteToolClient.prototype.deleteQuote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/quoteTool.QuoteTool/DeleteQuote',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_DeleteQuote,
      callback);
};


/**
 * @param {!proto.quoteTool.QuoteService.QuoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.quoteTool.QuoteService.QuoteDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.quoteTool.QuoteToolPromiseClient.prototype.deleteQuote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/quoteTool.QuoteTool/DeleteQuote',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_DeleteQuote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.quoteTool.QuoteService.NoParams,
 *   !proto.quoteTool.QuoteService.QuotesListResponse>}
 */
const methodDescriptor_QuoteTool_GetQuoteList = new grpc.web.MethodDescriptor(
  '/quoteTool.QuoteTool/GetQuoteList',
  grpc.web.MethodType.UNARY,
  proto.quoteTool.QuoteService.NoParams,
  proto.quoteTool.QuoteService.QuotesListResponse,
  /**
   * @param {!proto.quoteTool.QuoteService.NoParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.quoteTool.QuoteService.QuotesListResponse.deserializeBinary
);


/**
 * @param {!proto.quoteTool.QuoteService.NoParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.quoteTool.QuoteService.QuotesListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.quoteTool.QuoteService.QuotesListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.quoteTool.QuoteToolClient.prototype.getQuoteList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/quoteTool.QuoteTool/GetQuoteList',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_GetQuoteList,
      callback);
};


/**
 * @param {!proto.quoteTool.QuoteService.NoParams} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.quoteTool.QuoteService.QuotesListResponse>}
 *     Promise that resolves to the response
 */
proto.quoteTool.QuoteToolPromiseClient.prototype.getQuoteList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/quoteTool.QuoteTool/GetQuoteList',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_GetQuoteList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.quoteTool.QuoteService.NoParams,
 *   !proto.quoteTool.QuoteService.QuoteStreamResponse>}
 */
const methodDescriptor_QuoteTool_StreamQuotes = new grpc.web.MethodDescriptor(
  '/quoteTool.QuoteTool/StreamQuotes',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.quoteTool.QuoteService.NoParams,
  proto.quoteTool.QuoteService.QuoteStreamResponse,
  /**
   * @param {!proto.quoteTool.QuoteService.NoParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.quoteTool.QuoteService.QuoteStreamResponse.deserializeBinary
);


/**
 * @param {!proto.quoteTool.QuoteService.NoParams} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.quoteTool.QuoteService.QuoteStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.quoteTool.QuoteToolClient.prototype.streamQuotes =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/quoteTool.QuoteTool/StreamQuotes',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_StreamQuotes);
};


/**
 * @param {!proto.quoteTool.QuoteService.NoParams} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.quoteTool.QuoteService.QuoteStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.quoteTool.QuoteToolPromiseClient.prototype.streamQuotes =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/quoteTool.QuoteTool/StreamQuotes',
      request,
      metadata || {},
      methodDescriptor_QuoteTool_StreamQuotes);
};


module.exports = proto.quoteTool;


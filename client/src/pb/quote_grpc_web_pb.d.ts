import * as grpcWeb from 'grpc-web';

import * as quote_pb from './quote_pb';


export class QuoteToolClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getQuote(
    request: quote_pb.QuoteService.QuoteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: quote_pb.QuoteService.QuoteResponse) => void
  ): grpcWeb.ClientReadableStream<quote_pb.QuoteService.QuoteResponse>;

  createQuote(
    request: quote_pb.QuoteService.Quote,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: quote_pb.QuoteService.QuoteIdResponse) => void
  ): grpcWeb.ClientReadableStream<quote_pb.QuoteService.QuoteIdResponse>;

  updateQuote(
    request: quote_pb.QuoteService.Quote,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: quote_pb.QuoteService.QuoteIdResponse) => void
  ): grpcWeb.ClientReadableStream<quote_pb.QuoteService.QuoteIdResponse>;

  deleteQuote(
    request: quote_pb.QuoteService.QuoteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: quote_pb.QuoteService.QuoteDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<quote_pb.QuoteService.QuoteDeleteResponse>;

  getQuoteList(
    request: quote_pb.QuoteService.NoParams,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: quote_pb.QuoteService.QuotesListResponse) => void
  ): grpcWeb.ClientReadableStream<quote_pb.QuoteService.QuotesListResponse>;

  streamQuotes(
    request: quote_pb.QuoteService.NoParams,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<quote_pb.QuoteService.QuoteStreamResponse>;

}

export class QuoteToolPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getQuote(
    request: quote_pb.QuoteService.QuoteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<quote_pb.QuoteService.QuoteResponse>;

  createQuote(
    request: quote_pb.QuoteService.Quote,
    metadata?: grpcWeb.Metadata
  ): Promise<quote_pb.QuoteService.QuoteIdResponse>;

  updateQuote(
    request: quote_pb.QuoteService.Quote,
    metadata?: grpcWeb.Metadata
  ): Promise<quote_pb.QuoteService.QuoteIdResponse>;

  deleteQuote(
    request: quote_pb.QuoteService.QuoteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<quote_pb.QuoteService.QuoteDeleteResponse>;

  getQuoteList(
    request: quote_pb.QuoteService.NoParams,
    metadata?: grpcWeb.Metadata
  ): Promise<quote_pb.QuoteService.QuotesListResponse>;

  streamQuotes(
    request: quote_pb.QuoteService.NoParams,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<quote_pb.QuoteService.QuoteStreamResponse>;

}


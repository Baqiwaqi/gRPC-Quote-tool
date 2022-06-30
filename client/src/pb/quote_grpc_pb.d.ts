// package: quoteTool
// file: quote.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as quote_pb from "./quote_pb";

interface IQuoteToolService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getQuote: IQuoteToolService_IGetQuote;
    createQuote: IQuoteToolService_ICreateQuote;
    updateQuote: IQuoteToolService_IUpdateQuote;
    deleteQuote: IQuoteToolService_IDeleteQuote;
    getQuoteList: IQuoteToolService_IGetQuoteList;
    streamQuotes: IQuoteToolService_IStreamQuotes;
}

interface IQuoteToolService_IGetQuote extends grpc.MethodDefinition<quote_pb.QuoteService.QuoteRequest, quote_pb.QuoteService.QuoteResponse> {
    path: "/quoteTool.QuoteTool/GetQuote";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<quote_pb.QuoteService.QuoteRequest>;
    requestDeserialize: grpc.deserialize<quote_pb.QuoteService.QuoteRequest>;
    responseSerialize: grpc.serialize<quote_pb.QuoteService.QuoteResponse>;
    responseDeserialize: grpc.deserialize<quote_pb.QuoteService.QuoteResponse>;
}
interface IQuoteToolService_ICreateQuote extends grpc.MethodDefinition<quote_pb.QuoteService.Quote, quote_pb.QuoteService.QuoteCreateResponse> {
    path: "/quoteTool.QuoteTool/CreateQuote";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<quote_pb.QuoteService.Quote>;
    requestDeserialize: grpc.deserialize<quote_pb.QuoteService.Quote>;
    responseSerialize: grpc.serialize<quote_pb.QuoteService.QuoteCreateResponse>;
    responseDeserialize: grpc.deserialize<quote_pb.QuoteService.QuoteCreateResponse>;
}
interface IQuoteToolService_IUpdateQuote extends grpc.MethodDefinition<quote_pb.QuoteService.Quote, quote_pb.QuoteService.QuoteUpdateResponse> {
    path: "/quoteTool.QuoteTool/UpdateQuote";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<quote_pb.QuoteService.Quote>;
    requestDeserialize: grpc.deserialize<quote_pb.QuoteService.Quote>;
    responseSerialize: grpc.serialize<quote_pb.QuoteService.QuoteUpdateResponse>;
    responseDeserialize: grpc.deserialize<quote_pb.QuoteService.QuoteUpdateResponse>;
}
interface IQuoteToolService_IDeleteQuote extends grpc.MethodDefinition<quote_pb.QuoteService.QuoteRequest, quote_pb.QuoteService.QuoteDeleteResponse> {
    path: "/quoteTool.QuoteTool/DeleteQuote";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<quote_pb.QuoteService.QuoteRequest>;
    requestDeserialize: grpc.deserialize<quote_pb.QuoteService.QuoteRequest>;
    responseSerialize: grpc.serialize<quote_pb.QuoteService.QuoteDeleteResponse>;
    responseDeserialize: grpc.deserialize<quote_pb.QuoteService.QuoteDeleteResponse>;
}
interface IQuoteToolService_IGetQuoteList extends grpc.MethodDefinition<quote_pb.QuoteService.NoParams, quote_pb.QuoteService.QuotesListResponse> {
    path: "/quoteTool.QuoteTool/GetQuoteList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<quote_pb.QuoteService.NoParams>;
    requestDeserialize: grpc.deserialize<quote_pb.QuoteService.NoParams>;
    responseSerialize: grpc.serialize<quote_pb.QuoteService.QuotesListResponse>;
    responseDeserialize: grpc.deserialize<quote_pb.QuoteService.QuotesListResponse>;
}
interface IQuoteToolService_IStreamQuotes extends grpc.MethodDefinition<quote_pb.QuoteService.NoParams, quote_pb.QuoteService.Quote> {
    path: "/quoteTool.QuoteTool/StreamQuotes";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<quote_pb.QuoteService.NoParams>;
    requestDeserialize: grpc.deserialize<quote_pb.QuoteService.NoParams>;
    responseSerialize: grpc.serialize<quote_pb.QuoteService.Quote>;
    responseDeserialize: grpc.deserialize<quote_pb.QuoteService.Quote>;
}

export const QuoteToolService: IQuoteToolService;

export interface IQuoteToolServer {
    getQuote: grpc.handleUnaryCall<quote_pb.QuoteService.QuoteRequest, quote_pb.QuoteService.QuoteResponse>;
    createQuote: grpc.handleUnaryCall<quote_pb.QuoteService.Quote, quote_pb.QuoteService.QuoteCreateResponse>;
    updateQuote: grpc.handleUnaryCall<quote_pb.QuoteService.Quote, quote_pb.QuoteService.QuoteUpdateResponse>;
    deleteQuote: grpc.handleUnaryCall<quote_pb.QuoteService.QuoteRequest, quote_pb.QuoteService.QuoteDeleteResponse>;
    getQuoteList: grpc.handleUnaryCall<quote_pb.QuoteService.NoParams, quote_pb.QuoteService.QuotesListResponse>;
    streamQuotes: grpc.handleServerStreamingCall<quote_pb.QuoteService.NoParams, quote_pb.QuoteService.Quote>;
}

export interface IQuoteToolClient {
    getQuote(request: quote_pb.QuoteService.QuoteRequest, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    getQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    getQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    createQuote(request: quote_pb.QuoteService.Quote, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteCreateResponse) => void): grpc.ClientUnaryCall;
    createQuote(request: quote_pb.QuoteService.Quote, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteCreateResponse) => void): grpc.ClientUnaryCall;
    createQuote(request: quote_pb.QuoteService.Quote, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteCreateResponse) => void): grpc.ClientUnaryCall;
    updateQuote(request: quote_pb.QuoteService.Quote, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteUpdateResponse) => void): grpc.ClientUnaryCall;
    updateQuote(request: quote_pb.QuoteService.Quote, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteUpdateResponse) => void): grpc.ClientUnaryCall;
    updateQuote(request: quote_pb.QuoteService.Quote, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteUpdateResponse) => void): grpc.ClientUnaryCall;
    deleteQuote(request: quote_pb.QuoteService.QuoteRequest, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteDeleteResponse) => void): grpc.ClientUnaryCall;
    deleteQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteDeleteResponse) => void): grpc.ClientUnaryCall;
    deleteQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteDeleteResponse) => void): grpc.ClientUnaryCall;
    getQuoteList(request: quote_pb.QuoteService.NoParams, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuotesListResponse) => void): grpc.ClientUnaryCall;
    getQuoteList(request: quote_pb.QuoteService.NoParams, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuotesListResponse) => void): grpc.ClientUnaryCall;
    getQuoteList(request: quote_pb.QuoteService.NoParams, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuotesListResponse) => void): grpc.ClientUnaryCall;
    streamQuotes(request: quote_pb.QuoteService.NoParams, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<quote_pb.QuoteService.Quote>;
    streamQuotes(request: quote_pb.QuoteService.NoParams, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<quote_pb.QuoteService.Quote>;
}

export class QuoteToolClient extends grpc.Client implements IQuoteToolClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getQuote(request: quote_pb.QuoteService.QuoteRequest, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    public getQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    public getQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    public createQuote(request: quote_pb.QuoteService.Quote, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteCreateResponse) => void): grpc.ClientUnaryCall;
    public createQuote(request: quote_pb.QuoteService.Quote, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteCreateResponse) => void): grpc.ClientUnaryCall;
    public createQuote(request: quote_pb.QuoteService.Quote, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteCreateResponse) => void): grpc.ClientUnaryCall;
    public updateQuote(request: quote_pb.QuoteService.Quote, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteUpdateResponse) => void): grpc.ClientUnaryCall;
    public updateQuote(request: quote_pb.QuoteService.Quote, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteUpdateResponse) => void): grpc.ClientUnaryCall;
    public updateQuote(request: quote_pb.QuoteService.Quote, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteUpdateResponse) => void): grpc.ClientUnaryCall;
    public deleteQuote(request: quote_pb.QuoteService.QuoteRequest, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteDeleteResponse) => void): grpc.ClientUnaryCall;
    public deleteQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteDeleteResponse) => void): grpc.ClientUnaryCall;
    public deleteQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteDeleteResponse) => void): grpc.ClientUnaryCall;
    public getQuoteList(request: quote_pb.QuoteService.NoParams, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuotesListResponse) => void): grpc.ClientUnaryCall;
    public getQuoteList(request: quote_pb.QuoteService.NoParams, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuotesListResponse) => void): grpc.ClientUnaryCall;
    public getQuoteList(request: quote_pb.QuoteService.NoParams, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuotesListResponse) => void): grpc.ClientUnaryCall;
    public streamQuotes(request: quote_pb.QuoteService.NoParams, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<quote_pb.QuoteService.Quote>;
    public streamQuotes(request: quote_pb.QuoteService.NoParams, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<quote_pb.QuoteService.Quote>;
}

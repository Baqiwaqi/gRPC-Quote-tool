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
interface IQuoteToolService_ICreateQuote extends grpc.MethodDefinition<quote_pb.QuoteService.QuoteRequest, quote_pb.QuoteService.QuoteListResponse> {
    path: "/quoteTool.QuoteTool/CreateQuote";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<quote_pb.QuoteService.QuoteRequest>;
    requestDeserialize: grpc.deserialize<quote_pb.QuoteService.QuoteRequest>;
    responseSerialize: grpc.serialize<quote_pb.QuoteService.QuoteListResponse>;
    responseDeserialize: grpc.deserialize<quote_pb.QuoteService.QuoteListResponse>;
}
interface IQuoteToolService_IUpdateQuote extends grpc.MethodDefinition<quote_pb.QuoteService.QuoteRequest, quote_pb.QuoteService.QuoteResponse> {
    path: "/quoteTool.QuoteTool/UpdateQuote";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<quote_pb.QuoteService.QuoteRequest>;
    requestDeserialize: grpc.deserialize<quote_pb.QuoteService.QuoteRequest>;
    responseSerialize: grpc.serialize<quote_pb.QuoteService.QuoteResponse>;
    responseDeserialize: grpc.deserialize<quote_pb.QuoteService.QuoteResponse>;
}
interface IQuoteToolService_IDeleteQuote extends grpc.MethodDefinition<quote_pb.QuoteService.QuoteRequest, quote_pb.QuoteService.QuoteResponse> {
    path: "/quoteTool.QuoteTool/DeleteQuote";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<quote_pb.QuoteService.QuoteRequest>;
    requestDeserialize: grpc.deserialize<quote_pb.QuoteService.QuoteRequest>;
    responseSerialize: grpc.serialize<quote_pb.QuoteService.QuoteResponse>;
    responseDeserialize: grpc.deserialize<quote_pb.QuoteService.QuoteResponse>;
}

export const QuoteToolService: IQuoteToolService;

export interface IQuoteToolServer {
    getQuote: grpc.handleUnaryCall<quote_pb.QuoteService.QuoteRequest, quote_pb.QuoteService.QuoteResponse>;
    createQuote: grpc.handleUnaryCall<quote_pb.QuoteService.QuoteRequest, quote_pb.QuoteService.QuoteListResponse>;
    updateQuote: grpc.handleUnaryCall<quote_pb.QuoteService.QuoteRequest, quote_pb.QuoteService.QuoteResponse>;
    deleteQuote: grpc.handleUnaryCall<quote_pb.QuoteService.QuoteRequest, quote_pb.QuoteService.QuoteResponse>;
}

export interface IQuoteToolClient {
    getQuote(request: quote_pb.QuoteService.QuoteRequest, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    getQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    getQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    createQuote(request: quote_pb.QuoteService.QuoteRequest, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteListResponse) => void): grpc.ClientUnaryCall;
    createQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteListResponse) => void): grpc.ClientUnaryCall;
    createQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteListResponse) => void): grpc.ClientUnaryCall;
    updateQuote(request: quote_pb.QuoteService.QuoteRequest, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    updateQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    updateQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    deleteQuote(request: quote_pb.QuoteService.QuoteRequest, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    deleteQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    deleteQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
}

export class QuoteToolClient extends grpc.Client implements IQuoteToolClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getQuote(request: quote_pb.QuoteService.QuoteRequest, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    public getQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    public getQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    public createQuote(request: quote_pb.QuoteService.QuoteRequest, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteListResponse) => void): grpc.ClientUnaryCall;
    public createQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteListResponse) => void): grpc.ClientUnaryCall;
    public createQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteListResponse) => void): grpc.ClientUnaryCall;
    public updateQuote(request: quote_pb.QuoteService.QuoteRequest, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    public updateQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    public updateQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    public deleteQuote(request: quote_pb.QuoteService.QuoteRequest, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    public deleteQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
    public deleteQuote(request: quote_pb.QuoteService.QuoteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: quote_pb.QuoteService.QuoteResponse) => void): grpc.ClientUnaryCall;
}

// package: quoteTool
// file: quote.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class QuoteService extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuoteService.AsObject;
    static toObject(includeInstance: boolean, msg: QuoteService): QuoteService.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuoteService, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuoteService;
    static deserializeBinaryFromReader(message: QuoteService, reader: jspb.BinaryReader): QuoteService;
}

export namespace QuoteService {
    export type AsObject = {
    }


    export class Quote extends jspb.Message { 
        getId(): string;
        setId(value: string): Quote;

        getCarrier(): string;
        setCarrier(value: string): Quote;

        getCustomer(): string;
        setCustomer(value: string): Quote;

        getCustomerRef(): string;
        setCustomerRef(value: string): Quote;


        hasCustomerContact(): boolean;
        clearCustomerContact(): void;
        getCustomerContact(): QuoteService.CustomerContact | undefined;
        setCustomerContact(value?: QuoteService.CustomerContact): Quote;

        getAvailabledate(): number;
        setAvailabledate(value: number): Quote;

        getProduct(): string;
        setProduct(value: string): Quote;

        getCollectfrom(): string;
        setCollectfrom(value: string): Quote;

        getOrigin(): string;
        setOrigin(value: string): Quote;

        getDestination(): string;
        setDestination(value: string): Quote;

        getCargotype(): string;
        setCargotype(value: string): Quote;

        getIsdangerous(): boolean;
        setIsdangerous(value: boolean): Quote;

        getCanbeturned(): boolean;
        setCanbeturned(value: boolean): Quote;

        getIsknown(): boolean;
        setIsknown(value: boolean): Quote;

        getAircraftonly(): boolean;
        setAircraftonly(value: boolean): Quote;

        getDescription(): string;
        setDescription(value: string): Quote;

        getSizemetric(): string;
        setSizemetric(value: string): Quote;

        getWeightmetric(): string;
        setWeightmetric(value: string): Quote;


        hasCargo(): boolean;
        clearCargo(): void;
        getCargo(): QuoteService.Cargo | undefined;
        setCargo(value?: QuoteService.Cargo): Quote;


        hasRate(): boolean;
        clearRate(): void;
        getRate(): QuoteService.Rate | undefined;
        setRate(value?: QuoteService.Rate): Quote;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Quote.AsObject;
        static toObject(includeInstance: boolean, msg: Quote): Quote.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Quote, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Quote;
        static deserializeBinaryFromReader(message: Quote, reader: jspb.BinaryReader): Quote;
    }

    export namespace Quote {
        export type AsObject = {
            id: string,
            carrier: string,
            customer: string,
            customerRef: string,
            customerContact?: QuoteService.CustomerContact.AsObject,
            availabledate: number,
            product: string,
            collectfrom: string,
            origin: string,
            destination: string,
            cargotype: string,
            isdangerous: boolean,
            canbeturned: boolean,
            isknown: boolean,
            aircraftonly: boolean,
            description: string,
            sizemetric: string,
            weightmetric: string,
            cargo?: QuoteService.Cargo.AsObject,
            rate?: QuoteService.Rate.AsObject,
        }
    }

    export class CustomerContact extends jspb.Message { 
        getName(): string;
        setName(value: string): CustomerContact;

        getPhone(): string;
        setPhone(value: string): CustomerContact;

        getEmail(): string;
        setEmail(value: string): CustomerContact;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CustomerContact.AsObject;
        static toObject(includeInstance: boolean, msg: CustomerContact): CustomerContact.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CustomerContact, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CustomerContact;
        static deserializeBinaryFromReader(message: CustomerContact, reader: jspb.BinaryReader): CustomerContact;
    }

    export namespace CustomerContact {
        export type AsObject = {
            name: string,
            phone: string,
            email: string,
        }
    }

    export class Cargo extends jspb.Message { 
        getPieces(): number;
        setPieces(value: number): Cargo;

        getLength(): number;
        setLength(value: number): Cargo;

        getWidth(): number;
        setWidth(value: number): Cargo;

        getHeight(): number;
        setHeight(value: number): Cargo;

        getGrossweight(): number;
        setGrossweight(value: number): Cargo;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Cargo.AsObject;
        static toObject(includeInstance: boolean, msg: Cargo): Cargo.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Cargo, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Cargo;
        static deserializeBinaryFromReader(message: Cargo, reader: jspb.BinaryReader): Cargo;
    }

    export namespace Cargo {
        export type AsObject = {
            pieces: number,
            length: number,
            width: number,
            height: number,
            grossweight: number,
        }
    }

    export class Rate extends jspb.Message { 
        getOn(): string;
        setOn(value: string): Rate;

        getCostmin(): number;
        setCostmin(value: number): Rate;

        getCostrate(): number;
        setCostrate(value: number): Rate;

        getSalesmin(): number;
        setSalesmin(value: number): Rate;

        getSalesrate(): number;
        setSalesrate(value: number): Rate;

        getCurrency(): string;
        setCurrency(value: string): Rate;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Rate.AsObject;
        static toObject(includeInstance: boolean, msg: Rate): Rate.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Rate, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Rate;
        static deserializeBinaryFromReader(message: Rate, reader: jspb.BinaryReader): Rate;
    }

    export namespace Rate {
        export type AsObject = {
            on: string,
            costmin: number,
            costrate: number,
            salesmin: number,
            salesrate: number,
            currency: string,
        }
    }

    export class NoParams extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): NoParams.AsObject;
        static toObject(includeInstance: boolean, msg: NoParams): NoParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: NoParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): NoParams;
        static deserializeBinaryFromReader(message: NoParams, reader: jspb.BinaryReader): NoParams;
    }

    export namespace NoParams {
        export type AsObject = {
        }
    }

    export class QuoteRequest extends jspb.Message { 
        getId(): string;
        setId(value: string): QuoteRequest;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): QuoteRequest.AsObject;
        static toObject(includeInstance: boolean, msg: QuoteRequest): QuoteRequest.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: QuoteRequest, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): QuoteRequest;
        static deserializeBinaryFromReader(message: QuoteRequest, reader: jspb.BinaryReader): QuoteRequest;
    }

    export namespace QuoteRequest {
        export type AsObject = {
            id: string,
        }
    }

    export class QuoteResponse extends jspb.Message { 

        hasQuote(): boolean;
        clearQuote(): void;
        getQuote(): QuoteService.Quote | undefined;
        setQuote(value?: QuoteService.Quote): QuoteResponse;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): QuoteResponse.AsObject;
        static toObject(includeInstance: boolean, msg: QuoteResponse): QuoteResponse.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: QuoteResponse, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): QuoteResponse;
        static deserializeBinaryFromReader(message: QuoteResponse, reader: jspb.BinaryReader): QuoteResponse;
    }

    export namespace QuoteResponse {
        export type AsObject = {
            quote?: QuoteService.Quote.AsObject,
        }
    }

    export class QuoteListResponse extends jspb.Message { 
        clearQuotesList(): void;
        getQuotesList(): Array<QuoteService.Quote>;
        setQuotesList(value: Array<QuoteService.Quote>): QuoteListResponse;
        addQuotes(value?: QuoteService.Quote, index?: number): QuoteService.Quote;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): QuoteListResponse.AsObject;
        static toObject(includeInstance: boolean, msg: QuoteListResponse): QuoteListResponse.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: QuoteListResponse, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): QuoteListResponse;
        static deserializeBinaryFromReader(message: QuoteListResponse, reader: jspb.BinaryReader): QuoteListResponse;
    }

    export namespace QuoteListResponse {
        export type AsObject = {
            quotesList: Array<QuoteService.Quote.AsObject>,
        }
    }

    export class QuoteDeleteResponse extends jspb.Message { 
        getResponse(): string;
        setResponse(value: string): QuoteDeleteResponse;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): QuoteDeleteResponse.AsObject;
        static toObject(includeInstance: boolean, msg: QuoteDeleteResponse): QuoteDeleteResponse.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: QuoteDeleteResponse, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): QuoteDeleteResponse;
        static deserializeBinaryFromReader(message: QuoteDeleteResponse, reader: jspb.BinaryReader): QuoteDeleteResponse;
    }

    export namespace QuoteDeleteResponse {
        export type AsObject = {
            response: string,
        }
    }

}

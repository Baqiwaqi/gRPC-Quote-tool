import * as jspb from 'google-protobuf'



export class QuoteService extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuoteService.AsObject;
  static toObject(includeInstance: boolean, msg: QuoteService): QuoteService.AsObject;
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

    getCustomer(): QuoteService.Customer | undefined;
    setCustomer(value?: QuoteService.Customer): Quote;
    hasCustomer(): boolean;
    clearCustomer(): Quote;

    getCustomerRef(): string;
    setCustomerRef(value: string): Quote;

    getCustomerContactsList(): Array<QuoteService.Customer.Contact>;
    setCustomerContactsList(value: Array<QuoteService.Customer.Contact>): Quote;
    clearCustomerContactsList(): Quote;
    addCustomerContacts(value?: QuoteService.Customer.Contact, index?: number): QuoteService.Customer.Contact;

    getAvailableDate(): string;
    setAvailableDate(value: string): Quote;

    getProduct(): string;
    setProduct(value: string): Quote;

    getCollectFrom(): string;
    setCollectFrom(value: string): Quote;

    getOrigin(): string;
    setOrigin(value: string): Quote;

    getDestination(): string;
    setDestination(value: string): Quote;

    getCargoType(): string;
    setCargoType(value: string): Quote;

    getIsDangerous(): boolean;
    setIsDangerous(value: boolean): Quote;

    getCanBeTurned(): boolean;
    setCanBeTurned(value: boolean): Quote;

    getIsKnown(): boolean;
    setIsKnown(value: boolean): Quote;

    getAircraftOnly(): boolean;
    setAircraftOnly(value: boolean): Quote;

    getDescription(): string;
    setDescription(value: string): Quote;

    getSizeMetric(): string;
    setSizeMetric(value: string): Quote;

    getWeightMetric(): string;
    setWeightMetric(value: string): Quote;

    getCargoList(): Array<QuoteService.Cargo>;
    setCargoList(value: Array<QuoteService.Cargo>): Quote;
    clearCargoList(): Quote;
    addCargo(value?: QuoteService.Cargo, index?: number): QuoteService.Cargo;

    getRate(): QuoteService.Rates.Rate | undefined;
    setRate(value?: QuoteService.Rates.Rate): Quote;
    hasRate(): boolean;
    clearRate(): Quote;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Quote.AsObject;
    static toObject(includeInstance: boolean, msg: Quote): Quote.AsObject;
    static serializeBinaryToWriter(message: Quote, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Quote;
    static deserializeBinaryFromReader(message: Quote, reader: jspb.BinaryReader): Quote;
  }

  export namespace Quote {
    export type AsObject = {
      id: string,
      carrier: string,
      customer?: QuoteService.Customer.AsObject,
      customerRef: string,
      customerContactsList: Array<QuoteService.Customer.Contact.AsObject>,
      availableDate: string,
      product: string,
      collectFrom: string,
      origin: string,
      destination: string,
      cargoType: string,
      isDangerous: boolean,
      canBeTurned: boolean,
      isKnown: boolean,
      aircraftOnly: boolean,
      description: string,
      sizeMetric: string,
      weightMetric: string,
      cargoList: Array<QuoteService.Cargo.AsObject>,
      rate?: QuoteService.Rates.Rate.AsObject,
    }
  }


  export class Customer extends jspb.Message {
    getName(): string;
    setName(value: string): Customer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Customer.AsObject;
    static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
    static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Customer;
    static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
  }

  export namespace Customer {
    export type AsObject = {
      name: string,
    }

    export class Contact extends jspb.Message {
      getName(): string;
      setName(value: string): Contact;

      getPhone(): string;
      setPhone(value: string): Contact;

      getEmail(): string;
      setEmail(value: string): Contact;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Contact.AsObject;
      static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
      static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Contact;
      static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
    }

    export namespace Contact {
      export type AsObject = {
        name: string,
        phone: string,
        email: string,
      }
    }

  }


  export class Cargo extends jspb.Message {
    getTotalPieces(): number;
    setTotalPieces(value: number): Cargo;

    getTotalWeight(): number;
    setTotalWeight(value: number): Cargo;

    getTotalVolume(): number;
    setTotalVolume(value: number): Cargo;

    getSpecificationsList(): Array<QuoteService.Cargo.Specification>;
    setSpecificationsList(value: Array<QuoteService.Cargo.Specification>): Cargo;
    clearSpecificationsList(): Cargo;
    addSpecifications(value?: QuoteService.Cargo.Specification, index?: number): QuoteService.Cargo.Specification;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cargo.AsObject;
    static toObject(includeInstance: boolean, msg: Cargo): Cargo.AsObject;
    static serializeBinaryToWriter(message: Cargo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cargo;
    static deserializeBinaryFromReader(message: Cargo, reader: jspb.BinaryReader): Cargo;
  }

  export namespace Cargo {
    export type AsObject = {
      totalPieces: number,
      totalWeight: number,
      totalVolume: number,
      specificationsList: Array<QuoteService.Cargo.Specification.AsObject>,
    }

    export class Specification extends jspb.Message {
      getPieces(): number;
      setPieces(value: number): Specification;

      getDimensions(): QuoteService.Cargo.Dimensions | undefined;
      setDimensions(value?: QuoteService.Cargo.Dimensions): Specification;
      hasDimensions(): boolean;
      clearDimensions(): Specification;

      getGrossWeight(): number;
      setGrossWeight(value: number): Specification;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Specification.AsObject;
      static toObject(includeInstance: boolean, msg: Specification): Specification.AsObject;
      static serializeBinaryToWriter(message: Specification, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Specification;
      static deserializeBinaryFromReader(message: Specification, reader: jspb.BinaryReader): Specification;
    }

    export namespace Specification {
      export type AsObject = {
        pieces: number,
        dimensions?: QuoteService.Cargo.Dimensions.AsObject,
        grossWeight: number,
      }
    }


    export class Dimensions extends jspb.Message {
      getLength(): number;
      setLength(value: number): Dimensions;

      getWidth(): number;
      setWidth(value: number): Dimensions;

      getHeight(): number;
      setHeight(value: number): Dimensions;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Dimensions.AsObject;
      static toObject(includeInstance: boolean, msg: Dimensions): Dimensions.AsObject;
      static serializeBinaryToWriter(message: Dimensions, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Dimensions;
      static deserializeBinaryFromReader(message: Dimensions, reader: jspb.BinaryReader): Dimensions;
    }

    export namespace Dimensions {
      export type AsObject = {
        length: number,
        width: number,
        height: number,
      }
    }

  }


  export class Rates extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rates.AsObject;
    static toObject(includeInstance: boolean, msg: Rates): Rates.AsObject;
    static serializeBinaryToWriter(message: Rates, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rates;
    static deserializeBinaryFromReader(message: Rates, reader: jspb.BinaryReader): Rates;
  }

  export namespace Rates {
    export type AsObject = {
    }

    export class Rate extends jspb.Message {
      getOn(): string;
      setOn(value: string): Rate;

      getCostMin(): number;
      setCostMin(value: number): Rate;

      getCostRate(): number;
      setCostRate(value: number): Rate;

      getSalesMin(): number;
      setSalesMin(value: number): Rate;

      getSalesRate(): number;
      setSalesRate(value: number): Rate;

      getCurrency(): string;
      setCurrency(value: string): Rate;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Rate.AsObject;
      static toObject(includeInstance: boolean, msg: Rate): Rate.AsObject;
      static serializeBinaryToWriter(message: Rate, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Rate;
      static deserializeBinaryFromReader(message: Rate, reader: jspb.BinaryReader): Rate;
    }

    export namespace Rate {
      export type AsObject = {
        on: string,
        costMin: number,
        costRate: number,
        salesMin: number,
        salesRate: number,
        currency: string,
      }
    }

  }


  export class NoParams extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NoParams.AsObject;
    static toObject(includeInstance: boolean, msg: NoParams): NoParams.AsObject;
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
    getQuote(): QuoteService.Quote | undefined;
    setQuote(value?: QuoteService.Quote): QuoteResponse;
    hasQuote(): boolean;
    clearQuote(): QuoteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuoteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QuoteResponse): QuoteResponse.AsObject;
    static serializeBinaryToWriter(message: QuoteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuoteResponse;
    static deserializeBinaryFromReader(message: QuoteResponse, reader: jspb.BinaryReader): QuoteResponse;
  }

  export namespace QuoteResponse {
    export type AsObject = {
      quote?: QuoteService.Quote.AsObject,
    }
  }


  export class QuoteIdResponse extends jspb.Message {
    getId(): string;
    setId(value: string): QuoteIdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuoteIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QuoteIdResponse): QuoteIdResponse.AsObject;
    static serializeBinaryToWriter(message: QuoteIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuoteIdResponse;
    static deserializeBinaryFromReader(message: QuoteIdResponse, reader: jspb.BinaryReader): QuoteIdResponse;
  }

  export namespace QuoteIdResponse {
    export type AsObject = {
      id: string,
    }
  }


  export class QuoteDeleteResponse extends jspb.Message {
    getRespsone(): string;
    setRespsone(value: string): QuoteDeleteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuoteDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QuoteDeleteResponse): QuoteDeleteResponse.AsObject;
    static serializeBinaryToWriter(message: QuoteDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuoteDeleteResponse;
    static deserializeBinaryFromReader(message: QuoteDeleteResponse, reader: jspb.BinaryReader): QuoteDeleteResponse;
  }

  export namespace QuoteDeleteResponse {
    export type AsObject = {
      respsone: string,
    }
  }


  export class QuotesListResponse extends jspb.Message {
    getQuotesList(): Array<QuoteService.Quote>;
    setQuotesList(value: Array<QuoteService.Quote>): QuotesListResponse;
    clearQuotesList(): QuotesListResponse;
    addQuotes(value?: QuoteService.Quote, index?: number): QuoteService.Quote;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuotesListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QuotesListResponse): QuotesListResponse.AsObject;
    static serializeBinaryToWriter(message: QuotesListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuotesListResponse;
    static deserializeBinaryFromReader(message: QuotesListResponse, reader: jspb.BinaryReader): QuotesListResponse;
  }

  export namespace QuotesListResponse {
    export type AsObject = {
      quotesList: Array<QuoteService.Quote.AsObject>,
    }
  }


  export class QuoteStreamResponse extends jspb.Message {
    getQuote(): QuoteService.Quote | undefined;
    setQuote(value?: QuoteService.Quote): QuoteStreamResponse;
    hasQuote(): boolean;
    clearQuote(): QuoteStreamResponse;

    getChangetype(): QuoteService.QuoteStreamResponse.ChangeType;
    setChangetype(value: QuoteService.QuoteStreamResponse.ChangeType): QuoteStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuoteStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QuoteStreamResponse): QuoteStreamResponse.AsObject;
    static serializeBinaryToWriter(message: QuoteStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuoteStreamResponse;
    static deserializeBinaryFromReader(message: QuoteStreamResponse, reader: jspb.BinaryReader): QuoteStreamResponse;
  }

  export namespace QuoteStreamResponse {
    export type AsObject = {
      quote?: QuoteService.Quote.AsObject,
      changetype: QuoteService.QuoteStreamResponse.ChangeType,
    }

    export enum ChangeType { 
      ADDED = 0,
      UPDATED = 1,
      DELETED = 2,
    }
  }

}


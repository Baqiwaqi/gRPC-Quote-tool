import * as grpc from '@grpc/grpc-js';
import { QuoteToolClient } from '../pb/quote_grpc_pb';
import { QuoteService } from '../pb/quote_pb';

export default new QuoteToolClient(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

const client = new QuoteToolClient(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

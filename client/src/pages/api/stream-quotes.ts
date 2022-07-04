import type { NextApiRequest, NextApiResponse } from 'next'
// import * as grpc from '@grpc/grpc-js'
import * as grpcWeb from 'grpc-web';
import { QuoteService } from '../../pb/quote_pb';
import client from '../../utils/grpc-client';

export default function StreamQuotes(req: NextApiRequest, res: NextApiResponse) {
  const request = new QuoteService.NoParams

  var stream = client.streamQuotes(request);

  stream.on('data', (response: QuoteService.Quote) => {
   console.log(response.toObject());
   res.status(200).json(response.toObject());
  });

  stream.on('end', () => {
    console.log('end');
    stream.cancel();
  });
  
}
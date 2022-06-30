import type { NextApiRequest, NextApiResponse } from 'next'
import { QuoteService } from '../../pb/quote_pb';
import client from '../../utils/grpc-client';
import { setRequestBodyToQuoteRequest } from './create-quote';

export default function UpdateQuoteHandler(req: NextApiRequest, res: NextApiResponse)  {
  const request = setRequestBodyToQuoteRequest(req, new QuoteService.Quote());
  
  client.updateQuote(request, (err: Error | null, response: QuoteService.QuoteUpdateResponse) => {
    if (err) {
      console.log(err);
      res.status(500).send({error: err});
      return;
    }
    res.status(200).json(response.getResponse());
  });
}
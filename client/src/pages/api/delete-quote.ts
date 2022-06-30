import type { NextApiRequest, NextApiResponse } from 'next'
import { QuoteService } from '../../pb/quote_pb';
import client from '../../utils/grpc-client';

export default function DeleteQuoteHandler(req: NextApiRequest, res: NextApiResponse) {
  const quoteId = req.body.quoteId
  const request = new QuoteService.QuoteRequest().setId(quoteId)
  
  client.deleteQuote(request, (err: Error| null, response: QuoteService.QuoteDeleteResponse) => {
    if (err) {
      res.status(500).send({error: err})
      return;
    }
    res.status(200).json(response.getResponse())
  })
}
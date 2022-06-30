import type { NextApiRequest, NextApiResponse } from 'next'
import { QuoteService } from '../../pb/quote_pb';
import client from '../../utils/grpc-client';

export default function ListAllQuotesHandler(req: NextApiRequest, res: NextApiResponse) {
  const request = new QuoteService.NoParams

  client.getQuoteList(request, (err: Error | null, response: QuoteService.QuotesListResponse) => {
    if (err) {
      res.status(500).send({error: err})
      return;
    }
    console.log(response.toObject());
    
    res.status(200).json(response.toObject().quotesList)
  })
}
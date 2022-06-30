import type { NextApiRequest, NextApiResponse } from 'next'
import { QuoteService } from '../../pb/quote_pb';
import client from '../../utils/grpc-client';


export default function GetQuoteHandler(req: NextApiRequest, res: NextApiResponse)  {
  const quoteId = req.body.quoteId
  const request = new QuoteService.QuoteRequest().setId(quoteId);
  client.getQuote(request, (err: Error | null, response: QuoteService.QuoteResponse) => {
    if (err) {
      console.log(err);
      res.status(500).send({error: err});
      return;
    }
    const quote = response.getQuote()?.toObject();
    res.status(200).json(quote);
  });

}




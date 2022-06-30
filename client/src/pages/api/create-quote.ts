import type { NextApiRequest, NextApiResponse } from 'next'
import { QuoteService } from '../../pb/quote_pb';
import client from '../../utils/grpc-client';
const quote = {
  customer: "John Doe",
  customerRef: "12345",
};

export default function CreateQuoteHandler(req: NextApiRequest, res: NextApiResponse)  {
  const request = setRequestBodyToQuoteRequest(req, new QuoteService.Quote());
  client.createQuote(request, (err: Error | null, response: QuoteService.QuoteCreateResponse) => {
    if (err) {
      console.log(err);
      res.status(500).send({error: err});
      return;
    }
    res.status(200).json(response.getResponse());
  });
}

export function setRequestBodyToQuoteRequest(req: NextApiRequest, quote: QuoteService.Quote) {
  quote.setId(req.body.id);
  quote.setCustomer(req.body.customer);
  quote.setCustomerRef(req.body.customerRef);
  return quote;
}
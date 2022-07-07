import { useEffect, useState } from "react"
import { QuoteService } from "../pb/quote_pb"
import client from "./grpcClient"


export const useStreamQuotes = () => {
  const [quotes, setQuotes] = useState<QuoteService.Quote.AsObject[]>([])
  console.log(quotes);
  
  function handleResponse(quoteResponse: QuoteService.QuoteStreamResponse) {
    var response = quoteResponse.toObject()
    // enum ChangeType {
      //   ADDED = 0;
      //   UPDATED = 1;
      //   DELETED = 2;
      // }
    switch (response.changetype) {
      case 0:
        console.log("ADDED");
        setQuotes((q) => [...q, response.quote as QuoteService.Quote.AsObject])
        break;
      case 1:
        console.log("UPDATED");
        setQuotes((q) => {
          const newQuotes = [...q]
          const index = newQuotes.findIndex((q) => q.id === response.quote?.id)
          newQuotes[index] = response.quote as QuoteService.Quote.AsObject
          return newQuotes
        });
        break;
      case 2:
        console.log("DELETED");
        setQuotes((q) => q.filter(quote => quote.id !== response.quote?.id))
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    const request = new QuoteService.NoParams()
    const stream = client.streamQuotes(request)

    stream.on("data", (quoteResponse) => {
      console.log(quoteResponse.toObject());
      
      handleResponse(quoteResponse);
    }).on("error", (err) => {
      console.error(err)
    }
    ).on("end", () => {
      console.log("Stream ended")
      setQuotes([])
    }).on("status", (status) => {
      console.log(status)
    });
    
    return () => {
      setQuotes([])
      stream.cancel()
    }
  }, [])

  return quotes
}
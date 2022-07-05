import { useEffect, useState } from "react"
import client from "./grpcClient"
import { QuoteService } from "../pb/quote_pb"
import { flushSync } from "react-dom"

export const useStreamQuotes = () => {
  const [quotes, setQuotes] = useState<QuoteService.Quote.AsObject[]>([])

  function handleResponse(quoteResponse: QuoteService.QuoteSteamResponse) {
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
        console.log("UPDATED", response.quote?.id);
        setQuotes((q) => {
          const newQuotes = [...q]
          const index = newQuotes.findIndex((q) => q.id === response.quote?.id)
          newQuotes[index] = response.quote as QuoteService.Quote.AsObject
          return newQuotes
        });
        break;
      case 2:
        console.log("DELETED", response.quote?.id);
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
      handleResponse(quoteResponse);
    }).on("error", (err) => {
      console.error(err)
    }
    ).on("end", () => {
      console.log("Stream ended")
    }).on("status", (status) => {
      console.log(status)
    });
    return () => {
      stream.cancel()
    }
  }, [])

  return quotes
}

// create a function for a witch statement to handle the response type

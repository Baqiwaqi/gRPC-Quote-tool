import { flushSync } from 'react-dom';
import { useEffect, useState } from 'react';
import { QuoteService } from '../pb/quote_pb';
import JSONPretty from 'react-json-pretty';
import client from '../utils/grpcClient'
import { useStreamQuotes } from '../utils/streamQuotes';

// var client = new QuoteToolClient('http://localhost:9090', null, null);

export default function Home() {
  const [quoteId, setQuoteId] = useState("");
  const [responseType, setResponseType] = useState("");
  const [quoteResponse, setQuoteResponse] = useState();
  const [quotes, setQuotes] = useState<QuoteService.Quote.AsObject[]>([])
  const handleQuoteIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuoteId(event.target.value.trim());
  }

  const clearAll = () => {
    setQuoteId("");
    setResponseType("");
    setQuoteResponse(undefined);

  }
  const stream = useStreamQuotes();

  const getQuote = async () => {
    const request = new QuoteService.QuoteRequest();
    request.setId(quoteId)
    client.getQuote(request, undefined, (err: Error | null, response: any) => {
      if (err) {
        // setQuoteResponse(err.message)
        console.log(err.message);
        setResponseType(err.message)
        setQuoteResponse(undefined)
        return;
      }
      setResponseType("GetQuoteResponse");
      setQuoteResponse(response.toObject());
    });
  }

  const createQuote = async () => {
    const request = new QuoteService.Quote;
    client.createQuote(request, undefined, (err: Error | null, response: any) => {
      if (err) {
        console.log(err.message);
        setResponseType(err.message)
        setQuoteResponse(undefined)
        return;
      }
      setResponseType("Quote succesfully created")
      setQuoteResponse(response.toObject())
    });
  }

  const updateQuote = async () => {
    const request = new QuoteService.Quote;
    request.setId(quoteId);
    request.setCustomer("John Doe");
    client.updateQuote(request, undefined, (err: Error | null, response: any) => {
      if (err) {
        console.log(err.message);
        setResponseType(err.message)
        setQuoteResponse(undefined)
        return;
      }
      setResponseType("Quote succesfully updated")
      setQuoteResponse(response.toObject())
    });
  }

  const deleteQuote = async () => {
    const request = new QuoteService.QuoteRequest().setId(quoteId);
    client.deleteQuote(request, undefined, (err: any, response: any) => {
      if (err) {
        console.error(err);
        return;
      }
      // remove deleted quote from list
      // setQuotes(quotes.filter(quote => quote.id != quoteId))
      setResponseType("Delete");
      setQuoteResponse(response.toObject());
    });
  }

  const listAllQuotes = async () => {
    const request = new QuoteService.NoParams()
    client.getQuoteList(request, undefined, (err: Error | null, response: any) => {
      if (err) {
        console.log(err.message);
        setResponseType(err.message)
        setQuoteResponse(undefined)
        return;
      }
      setResponseType("ListAllQuotes");
      setQuoteResponse(response.toObject());
    });
  }


  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex flex-row justify-center items-center h-screen w-screen space-x-2 ">
        <div className="flex flex-col items-center space-y-2 p-6 h-4/5">
          <h1 className="text-4xl font-bold">Actions</h1>
          <div className="flex flex-col space-y-2 p-6 w-96">
            <label className="text-blue-100font-bold " >Quote ID</label>
            <input className="bg-blue-100 text-gray-700 font-bold py-2 px-4 rounded"
              type="text"
              id='quoteId'
              name='quoteId'
              placeholder="Enter a quote id"
              onChange={handleQuoteIdChange}
              value={quoteId}
            />
            <button className="bg-blue-500  active:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={clearAll}>
              Clear
            </button>
            <button className="bg-blue-500  active:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={getQuote}>
              Get
            </button>
            <button className="bg-blue-500 active:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={createQuote}>
              Create
            </button>
            <button className="bg-blue-500 active:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={updateQuote}
            >
              Update
            </button>
            <button className="bg-blue-500 active:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={deleteQuote}
            >
              Delete
            </button>

            <button className="bg-blue-500 active:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={listAllQuotes}
            >
              List all
            </button>
            {/* <button className="bg-blue-500 active:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={useClosestreamQuotes}
            >
              closestream
            </button> */}

          </div>
        </div>

        <div className="flex flex-col items-center space-y-2 p-6  h-4/5">
          <h1 className="text-4xl font-bold">Quote response</h1>
          {responseType && <h5 className='font-bold'>{responseType}</h5>}
          <JSONPretty className='overflow-y-auto' id="pretty" data={quoteResponse} />
        </div>

        <div className=" flex flex-col items-start space-y-2 p-6  h-4/5">
          <h1 className="text-4xl align-middle font-bold">Stream</h1>
          {stream && stream.map((quote, index) => {
            return (
              <div key={index} className="items-st">
                <h5 className='font-bold'>{quote.id}</h5>
                <p className="">Customer: {quote.customer}</p>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
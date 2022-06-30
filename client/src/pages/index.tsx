import { useState } from 'react';
import { QuoteService } from '../pb/quote_pb';
import JSONPretty from 'react-json-pretty';


export default function Home() {
  const [quoteId, setQuoteId] = useState("");
  const [responseType, setResponseType] = useState("");
  const [quoteResponse, setQuoteResponse] = useState();

  const handleQuoteIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuoteId(event.target.value.trim());
  }

  const clearAll = () => {
    setQuoteId("");
    setResponseType("");
    setQuoteResponse(undefined);
  }

  const getQuote = async () => {
    if (quoteId === "") {
      setResponseType("error: no quoteId");
      return;
    }
    const response = await fetch('api/get-quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        quoteId: quoteId
      })
    });
    const quote = await response.json();
    setQuoteResponse(quote);
    setResponseType("Get");
    setQuoteId("");
  }

  const createQuote = async () => {
    const response = await fetch('api/create-quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        quoteId: quoteId,
        customer: "John Doe",
        customerRef: "12345",
      })
    });
    const result = await response.json();
    setResponseType("Create");
    setQuoteResponse(result);
    setQuoteId("");
  }

  const updateQuote = async () => {
    if (quoteId === "") {
      setResponseType("error: no quoteId");
      return;
    }
    const response = await fetch('api/update-quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: quoteId,
        customer: "John Doe update lol",
        customerRef: "12345",
      })
    });
    const result = await response.json();
    setResponseType("Update");
    setQuoteResponse(result);
    setQuoteId("");
  }

  const deleteQuote = async () => {
    if (quoteId === "") {
      setResponseType("error: no quoteId");
      setQuoteResponse(undefined);
      return;
    }

    const response = await fetch('api/delete-quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        quoteId: quoteId
      })
    });
    const result = await response.json();
    setResponseType("Delete");
    setQuoteResponse(result);
    setQuoteId("");
  }

  const listAllQuotes = async () => {
    const response = await fetch('api/list-all-quotes')
    const result = await response.json()
    setResponseType("List all")
    setQuoteResponse(result)
  }

  const startQuoteStream = async () => {
    await fetch('api/stream-quotes')
  }

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex flex-row justify-center items-center h-screen w-screen space-x-2 ">
        <div className="flex flex-col  items-center space-y-2 p-6 h-4/5">
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
            <button className="bg-blue-500 active:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={startQuoteStream}
            >
              Start stream
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2 p-6  h-4/5">
          <h1 className="text-4xl font-bold">Quote response</h1>
          {responseType && <h5 className='font-bold'>{responseType}</h5>}
          <JSONPretty className='overflow-y-auto' id="pretty" data={quoteResponse} />
        </div>
        <div className="flex flex-col border border-color-blue items-center space-y-2 p-6 w-96 h-3/5">
          <h1 className="text-4xl font-bold">Stream</h1>
        </div>
      </div>
    </div>
  )
}
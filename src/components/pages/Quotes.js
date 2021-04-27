import React, { useEffect, useState } from "react";
import useAxioshttp from "../../hooks/use-axioshttp";
import NoQuotesFound from "../quotes/NoQuotesFound";
import QuoteList from "../quotes/QuoteList";
import LoadingSpinner from "../UI/LoadingSpinner";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const { isLoading, error, sendRequest } = useAxioshttp();
  // const quotes = useSelector((state) => state.quotes.items);

  useEffect(() => {
    const setQuotesFn = (response) => {
      setQuotes(response);
    };
    sendRequest(
      {
        method: "GET",
        url: "/quotes",
        headers: { "Content-Type": "application/json" },
        data: null,
      },
      setQuotesFn
    );
  }, [sendRequest]);

  if (isLoading)
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );

  if (error) return <div className="centered">{error.message}</div>;

  return (
    <div>
      {quotes.length ? <QuoteList quotes={quotes} /> : <NoQuotesFound />}
    </div>
  );
};

export default Quotes;

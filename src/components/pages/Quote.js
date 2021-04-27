import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import useAxioshttp from "../../hooks/use-axioshttp";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import LoadingSpinner from "../UI/LoadingSpinner";
import NotFound from "./NotFound";

const Quote = () => {
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;
  console.log(match);
  // const items = useSelector((state) => state.quotes.items);
  // const quote = items.find((item) => item.id === params.quoteId);

  // console.log(params.quoteId, items);

  const [quote, setQuote] = useState(null);
  const { isLoading, error, sendRequest } = useAxioshttp();

  useEffect(() => {
    const setQuoteFn = (response) => {
      setQuote(response);
    };
    sendRequest(
      {
        url: `quotes/${quoteId}`,
      },
      setQuoteFn
    );
  }, [sendRequest, quoteId]);

  if (isLoading)
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );

  if (error) return <div className="centered">{error.message}</div>;

  if (!quote) return <NotFound />;

  return (
    <>
      <HighlightedQuote quote={quote} />
      {/* <Route path={`/quotes/${params.quoteId}`} exact> */}
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            See comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments quoteId={quoteId} />
      </Route>
    </>
  );
};

export default Quote;

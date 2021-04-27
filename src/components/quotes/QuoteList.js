import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const orderFn = (array, modo = "asc") => {
  let x = modo === "desc" ? -1 : 1;
  let y = modo === "desc" ? 1 : -1;

  return array.sort((a, b) => {
    if (a.text > b.text) return x;

    if (a.text < b.text) return y;

    return 0;
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSortingAcending = queryParams.get("sort") === "asc";
  const sorterQuotes = orderFn(
    props.quotes,
    isSortingAcending ? "asc" : "desc"
  );
  const inverSortHandler = () => {
    history.push(`/quotes?sort=${isSortingAcending ? "desc" : "asc"}`);
    // if (order.text === "Sort Descendig") {
    //   setOrder({
    //     text: "Sort Ascendig",
    //     quotes: orderFn(props.quotes, "ASC2"),
    //   });
    // } else {
    //   setOrder({
    //     text: "Sort Descendig",
    //     quotes: orderFn(props.quotes, "DESC"),
    //   });
    // }
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={inverSortHandler}>
          Sort {isSortingAcending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sorterQuotes.map((quote) => (
          <QuoteItem key={quote.id} quote={quote} />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;

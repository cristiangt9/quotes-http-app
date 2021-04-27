import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = ({ quote }) => {
  return (
    <figure className={classes.quote}>
      <p>{quote.text}</p>
      <figcaption>{quote.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;

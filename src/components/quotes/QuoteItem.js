import { Link } from "react-router-dom";
import classes from "./QuoteItem.module.css";

const QuoteItem = ({quote}) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{quote.text}</p>
        </blockquote>
        <figcaption>{quote.author}</figcaption>
      </figure>
      <Link to={`/quotes/${quote.id}`} className="btn">View Fullscreen</Link>
    </li>
  );
};

export default QuoteItem;

import { useEffect, useState } from "react";
import useAxioshttp from "../../hooks/use-axioshttp";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = ({ quoteId }) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  // const items = useSelector((state) => state.quotes.items);
  // const comments = items.find(item => item.id = quoteId).comments;
  const [comments, setComments] = useState([]);
  const { isLoading, error, sendRequest } = useAxioshttp();

  useEffect(() => {
    const setCommentFn = (response) => {
      setComments(response);
    };
    sendRequest({ url: "comments", data: { quote_id: quoteId } }, setCommentFn);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  if (isLoading)
    return (
      <section className={classes.comments}>
        <LoadingSpinner />
      </section>
    );

  if (error)
    return <section className={classes.comments}>{error.message}</section>;

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm quoteId={quoteId} setComments={setComments} />
      )}
      <CommentsList comments={comments} />
    </section>
  );
};

export default Comments;

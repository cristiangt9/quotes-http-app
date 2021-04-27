import { useState } from "react";
import useAxioshttp from "../../hooks/use-axioshttp";
import LoadingSpinner from "../UI/LoadingSpinner";
// import { useDispatch } from "react-redux";
// import { addComment } from "../../store/actions";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const [comment, setComment] = useState("");
  // const dispatch = useDispatch();
  const { isLoading, error, sendRequest } = useAxioshttp();

  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
    // dispatch(
    //   addComment({
    //     id: props.quoteId,
    //     comment,
    //   })
    // );
    const onSaveHandler = (response) => {
      props.setComments(response.comments);
      setComment("");
    }

    sendRequest(
      {
        method: "POST",
        url: `comments`,
        data: { text: comment, quote_id: props.quoteId },
      },
      onSaveHandler
    );
    
  };

  const changeHandler = (event) => {
    setComment(event.target.value);
  };

  if (isLoading)
    return (
      <section className={classes.form}>
        <LoadingSpinner />
      </section>
    );

  if (error)
    return <section className={classes.form}>{error.message}</section>;

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea
          id="comment"
          name="comment"
          rows="5"
          value={comment}
          onChange={changeHandler}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;

import { useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const [form, setForm] = useState({
    author: "",
    text: "",
  });

  function submitFormHandler(event) {
    event.preventDefault();

    // validate here

    props.onAddQuote(form);
  }

  const changeHandler = (event) => {
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };

  const formFocosedHandeler = () => {
    setIsEntering(true);
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  return (
    <>
    <Prompt when={isEntering} message={(location) => 'Are you sure you want to leave? All your entered data will be lost!!'}/>
      <Card>
        <form
          onFocus={formFocosedHandeler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              onChange={changeHandler}
              value={form.author}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea
              id="text"
              name="text"
              rows="5"
              onChange={changeHandler}
              value={form.text}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;

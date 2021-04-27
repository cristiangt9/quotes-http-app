import React from "react";
import { useHistory } from "react-router-dom";
import useAxioshttp from "../../hooks/use-axioshttp";
import QuoteForm from "../quotes/QuoteForm";
import LoadingSpinner from "../UI/LoadingSpinner";

const AddQuote = () => {
  const history = useHistory();
  // const dispatch = useDispatch();
  // const [sended, setSended] = useState(false);
  const { isLoading, error, sendRequest } = useAxioshttp();
  const AddQuoteHandler = (form) => {
    const setQuote = (response) => {
      console.log(response);
      history.push("/quotes");
    };
    sendRequest(
      {
        method: "POST",
        url: "/quotes",
        headers: { "Conten-Type": "application/json" },
        data: form,
      },
      setQuote
    );
  };

  if (isLoading)
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );

  if (error) return <div className="centered">{error.message}</div>;

  return (
    <div>
      <QuoteForm onAddQuote={AddQuoteHandler} />
    </div>
  );
};

export default AddQuote;

import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./UnderstandingPage.css";

function UnderstandingPage() {
  const dispatch = useDispatch();
  const feedback = useSelector((store) => store.feedback);

  const [understanding, setUnderstanding] = useState(understandingState);

  let understandingState;

  if (feedback.feeling) {
    console.log("understanding is", feedback.understanding);
    understandingState = feedback.understanding;
  } else {
    console.log("understanding is undefined");
    understandingState = "";
  }

  const handleSubmit = (event) => {
    event.preventDefault;

    if (understanding === "") {
      return alert("Please select a number");
    }
    else if (understanding > 5 || understanding < 1){
        return alert('Please enter a number (1-5)');
    } else {
      dispatch({
        type: "SET_UNDERSTANDING_RATING",
        payload: { property: "understanding", value: understanding },
      });
    }
  };

  return (
    <>
      <h2>How well are you understanding the content today?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          variant="filled"
          placeholder="1-5"
          min="1"
          max="5"
          value={understanding}
          // Changes string to number value on submit
          onChange={(event) => setUnderstanding(Number(event.target.value))}
        />
        <Link to="/">
          <button>Back</button>
        </Link>
        <Link to="/support">
          <button onClick={handleSubmit}>Next</button>
        </Link>
      </form>
    </>
  );
}

export default UnderstandingPage;

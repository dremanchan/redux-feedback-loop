import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./SupportedPage.css";

function SupportedPage() {
  const dispatch = useDispatch();
  const feedback = useSelector((store) => store.feedback);
  const history = useHistory();

  let supportState;

  if (feedback.support) {
    console.log("support is", feedback.support);
    supportState = feedback.support;
  } else {
    console.log("support is undefined");
    supportState = "";
  }

  // local state
  const [support, setSupport] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form Validation
    if (support === "") {
      return alert("Please enter a number (1-5)");
    } else if (support > 5 || support < 1){
        return alert('Please enter a number (1-5)');
    }
     else {
      dispatch({
        type: "SET_SUPPORT_RATING",
        payload: { property: "support", value: support },
      });

      history.push("/comments");
    }
  };

  return (
    <>
      <h2>How well do you feel supported?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          variant="filled"
          placeholder="1-5"
          min="1"
          max="5"
          value={support}
          // Changes string to number value on submit
          onChange={(event) => setSupport(Number(event.target.value))}
        />
        <Link to="/understanding">
          <button>Back</button>
        </Link>
        {/* This link doesn't work for some reason */}
        <Link to="comments">
          <button onClick={handleSubmit}>Next</button>
        </Link>
      </form>
    </>
  );
}

export default SupportedPage;

import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./FeelingPage.css";

function FeelingPage() {
  const dispatch = useDispatch();

  // local state
  const [feeling, setFeeling] = useState[""];

  const handleSubmit = (event) => {
    event.preventDefault;
    console.log("in handleSubmit");

    // form validation
    if (feeling === "") {
      return alert("Please select a number");
    } else {
      dispatch({
        type: "SET_FEELING_RATING",
        payload: { property: "feeling", value: feeling },
      });
    }
  };

  return (
    <>
      <h1>How are you feeling today?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          variant="filled"
          placeholder="1-5"
          min="1"
          max="5"
          value={feeling}
          // Changes string to number value on submit
          onchange={(event) => setFeeling(Number(event.target.value))}
        />
        <Link to="/understanding">
            <button onClick={handleSubmit}>
                Next
            </button>
        </Link>
        
      </form>
    </>
  );
}

export default FeelingPage;

import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import ReactDOM from "react-dom";
import  Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import "./FeelingPage.css";

function FeelingPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  // local state
  const [feeling, setFeeling] = useState();

  const handleSubmit = (event) => {
    event.preventDefault;

    // Form validation
    if (feeling === "") {
      return alert("Please select a number");
    } else if (feeling > 5 || feeling < 1) {
      return alert("Please enter a number (1-5)");
    } else if (feeling === undefined) {
      return alert("Please enter a number (1-5)");
    } else {
      dispatch({
        type: "SET_FEELING_RATING",
        payload: { property: "feeling", value: feeling },
      });
      history.push("/understanding");
    }
  };

  return (
    <>
      <h2>How are you feeling today?</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          type="number"
          id="filled-basic"
          variant="filled"
          placeholder="1-5"
          min="1"
          max="5"
          value={feeling}
          // Changes string to number value on submit
          onChange={(event) => setFeeling(Number(event.target.value))}
        />

        <Button variant="contained" onClick={handleSubmit}>Next</Button>
      </form>
    </>
  );
}

export default FeelingPage;

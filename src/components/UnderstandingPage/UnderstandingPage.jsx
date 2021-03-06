import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./UnderstandingPage.css";
import TextField from '@mui/material/TextField';
import  Button from "@mui/material/Button";

function UnderstandingPage() {
  const dispatch = useDispatch();
  const feedback = useSelector((store) => store.feedback);
  const history = useHistory();

  const [understanding, setUnderstanding] = useState();

  const handleSubmit = (event) => {
    event.preventDefault;

    // Form Validation with booleans to check for wrong inputs
    if (understanding === "") {
      return alert('Please enter a number between 1 and 5');
    } else if (understanding > 5 || understanding < 1){
      return alert('Please enter a number between 1 and 5');
    } else if (understanding === undefined) {
      return alert('Please enter a number between 1 and 5');
    }
     else {
      dispatch({
        type: "SET_UNDERSTANDING_RATING",
        payload: { property: "understanding", value: understanding },
      });
      history.push('/support')
    }
  };

  return (
    <>
      <h2>How well are you understanding the content today?</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          type="number"
          variant="filled"
          id="filled-basic"
          placeholder="1-5"
          min="1"
          max="5"
          value={understanding}
          required
          // Changes string to number value on submit
          onChange={(event) => setUnderstanding(Number(event.target.value))}
        />
        <Link to="/">
          <Button variant="contained">Back</Button>
        </Link>
          <Button variant="contained" onClick={handleSubmit}>Next</Button>
      </form>
    </>
  );
}

export default UnderstandingPage;

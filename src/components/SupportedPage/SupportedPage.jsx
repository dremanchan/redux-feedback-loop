import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./SupportedPage.css";

function SupportedPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  // local state
  const [support, setSupport] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form Validation
    if (support === "") {
      return alert("Please enter a number (1-5)");
    } else if (support > 5 || support < 1) {
      return alert("Please enter a number (1-5)");
    } else if (support === undefined) {
      return alert("Please enter a number (1-5)");
    } else {
      dispatch({
        type: "SET_SUPPORT_RATING",
        payload: { property: "support", value: support },
      });
      // This sends the user to the comments page
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
        <button onClick={handleSubmit}>Next</button>
      </form>
    </>
  );
}

export default SupportedPage;

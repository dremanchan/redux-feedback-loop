import "./ReviewPage.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function ReviewPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const feedback = useSelector((store) => store.feedback);

  const startOver = () => {
      // clears the feedback reducer
      dispatch({
        type: 'CLEAR_FEEDBACK'
      });
      // sends the user back to the first page
      history.push('/')
  }

  const submitFeedback = () => {
    console.log('in submitFeedback', feedback);

    axios.post('/feedback', feedback)
        .then(res => {
            console.log('POST successful', res);
        })
        .catch(err => {
            console.error('POST failed', err);
            alert('Feedback failed to send')
        });
    startOver();
  }

  return (
    <>
      <h2> Review Your Feedback </h2>

      <h3>
        Feeling: {feedback.feeling}
        <Link to="/">
          <button>Change Rating</button>
        </Link>
      </h3>

      <h3>
        Understanding: {feedback.understanding}
        <Link to="/understanding">
          <button>Change Rating</button>
        </Link>
      </h3>

      <h3>
        Support: {feedback.support}
        <Link to="/support">
          <button>Change Rating</button>
        </Link>
      </h3>

      <h3>
        Comments:{" "}
        {feedback.comments ? feedback.comments : "No comments were made."}
      </h3>
      <Link to="/comments">
        <button>Change Comments</button>
      </Link>

      <button onClick={submitFeedback}>
          Submit
      </button>
    </>
  );
}

export default ReviewPage;

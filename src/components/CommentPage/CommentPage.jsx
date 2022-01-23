import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./CommentPage.css";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import  Button from "@mui/material/Button";

function CommentPage() {
  const dispatch = useDispatch();

  // Set local state
  const [comments, setComments] = useState();

  const handleSubmit = (event) => {
    event.preventDefault;

    dispatch({
      type: 'SET_COMMENTS',
      payload: { property: 'comments', value: comments },
    });

  };

  return (
    <>
      <h2>Would you like to leave a comment?</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          id="outlined-multiline-flexible"
          label="Comments optional"
          multiline
          maxRows={4}
          placeholder="Write your feedback here"
          value={comments}
          onChange={(event) => setComments(event.target.value)}
          />
        <Link to="/support">
          <Button variant="contained">Back</Button>
        </Link>
        <Link to="/review">
          <Button variant ="contained" onClick={handleSubmit}>Next</Button>
        </Link>
      </form>
    </>
  );
}

export default CommentPage;

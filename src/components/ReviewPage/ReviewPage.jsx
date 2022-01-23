import './ReviewPage.css';
import { useState } from 'react';
import { Link , useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function ReviewPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.feedback);
    return (
        <>
        <h2> Review Your Feedback </h2>

           <Link to="/">
           <h3>Feeling: {feedback.feeling} </h3>
           </Link> 

           <Link to="/understanding">
               <h3>Understanding: {feedback.understanding}</h3>
           </Link>
        
       
        </>

       

    )
}

export default ReviewPage;
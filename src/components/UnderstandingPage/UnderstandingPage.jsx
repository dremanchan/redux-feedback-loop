import { useState } from 'react'
import { Link , useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './UnderstandingPage.css';

function UnderstandingPage() {
    const dispatch = useDispatch();
    const feedback = useSelector((store) => store.feedback);

    const [understanding, setUnderstanding] = useState();
    
    const handleSubmit = (event) => {
        event.preventDefault;

        if (understanding === "") {
            return alert('Please select a number');
        } else {
            dispatch({
                type: "SET_UNDERSTANDING_RATING",
                payload: { property: "understanding", value: understanding}
            });
        }

    };
    
    return (
        <h1>How well are you understanding the content?</h1>
    )
}

export default UnderstandingPage;
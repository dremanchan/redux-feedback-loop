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
        <>
        <h1>How are you understanding the content today?</h1>
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
          <Link to="/support">
            <button onClick={handleSubmit}>Next</button>
          </Link>
        </form>
      </>
    )
}

export default UnderstandingPage;
import { useState } from 'react'
import { Link , useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './SupportedPage.css';

function SupportedPage() {
    const dispatch = useDispatch();
    const feedback = useSelector((store) => store.feedback);

    let supportState;

    if (feedback.support) {
        console.log("feeling is", feedback.support);
        supportState = feedback.support;
      } else {
        console.log("feeling is undefined");
        supportState = "";
      }

    
    // local state
    const [support, setSupport] = useState(supportState);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        // Form Validation
        if (support === "") {
            return alert('Please select a number');
        } else {
            dispatch({
                type: "SET_SUPPORT_RATING",
                payload: { property: "support", value: support },
            });
        }
    }    

    return (
        <>
        <h1>How well do you feel supported?</h1>
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
        </form>
        </>
    )
}

export default SupportedPage;
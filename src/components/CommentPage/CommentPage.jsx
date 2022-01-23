import { useState } from 'react'
import { Link , useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './CommentPage.css';

function CommentPage() {
    const dispatch = useDispatch();
    const feedback = useSelector((store) => store.feedback);

    const [comments, setComments] = useState();

    const handleSubmit = (event) => {
        event.preventDefault;

        dispatch({
            type: "SET_COMMENTS",
            payload: { property: "comments", value: comments }
        });
    }


    return (
        <>
        <h1>Any comments you want to leave?</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Write your feedback here"
                value={comments}
                onChange={(event) => setComments(event.target.value)}
            />
        
        </form>
        </>
    )
}

export default CommentPage;
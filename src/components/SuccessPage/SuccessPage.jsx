import { Link } from "react-router-dom";

function SuccessPage() {
    return (
        <>
            <h2>Thank you for submitting your feedback</h2>
            <h2>If you would like to take the survey again</h2>
            <Link to="/">
                <button>Click Here</button>
            </Link>

        </>
    )
}

export default SuccessPage;
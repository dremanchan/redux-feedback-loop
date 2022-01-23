import { Link } from "react-router-dom";
import  Button from "@mui/material/Button";

function SuccessPage() {
    return (
        <>
            <h2>Thank you for submitting your feedback!</h2>
            <h2>If you would like to take the survey again click the button</h2>
            <Link to="/">
                <Button variant="contained" size="small">Click Here</Button>
            </Link>

        </>
    )
}

export default SuccessPage;
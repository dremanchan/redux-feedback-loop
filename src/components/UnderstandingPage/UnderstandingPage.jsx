import { useState } from 'react'
import { Link , useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './UnderstandingPage.css';

function UnderstandingPage() {
    const dispatch = useDispatch();
    
    return (
        <h1>How well are you understanding the content?</h1>
    )
}

export default UnderstandingPage;
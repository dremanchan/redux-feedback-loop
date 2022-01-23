import { useState } from 'react'
import { Link , useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './FeelingPage.css';

function FeelingPage() {
    const dispatch = useDispatch();
    
    return (
        <h1>How are you feeling today?</h1>
    )
}

export default FeelingPage;
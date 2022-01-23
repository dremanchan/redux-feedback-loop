const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Posting data to the database
router.post('/', (req, res) => {
    console.log('POST is', req.body);

    let feedback = req.body;

    const queryText =`
    INSERT INTO "feedback"
        ("feeling", 
        "understanding", 
        "support", 
        "comments")
    VALUES
        ($1, $2, $3, $4);
    `;
    // Prevents sql injection

    let queryParams = [
        feedback.feeling,       // $1
        feedback.understanding, // $2
        feedback.support,       // $3
        feedback.comments       // $4
    ];

    pool.query(queryText, queryParams)
        .then(dbRes => res.sendStatus(201)
        )
        .catch(err => {
            console.error('POST to db failed', err);
            res.sendStatus(500);
        });
})

module.exports = router;
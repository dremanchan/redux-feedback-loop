# Redux-Feedback-Loop

# Instructions

To get started go to the data.sql page and run the sql queries to get your database started.

Open up your terminal and run:
    - npm install
    - npm run server

Open another terminal and run
    -npm run client

Input your ratings in the forms and hit the next button to be taken to the next page.

Screenshots are in the Screenshots folder.


## Description

The client wanted an app to record daily student feedback on their curriculum. The parameters they wanted to record were how the students were feeling,
 their level of comprehension, the level of support they felt, and additional comments as well. When the form is fully submitted the student info is sent to
 a database.

To meet the requirements of the task, I made all of the required pages. Each page with a rating on it requires a number from 1-5 in the input field before the
user can hit submit. The comments are optional. After inputting their values and hitting the next button, the user will be taken to a review page where they
can see their ratings and edit them one more time before submitting their feedback. Each page also has a back button in case they need to redo their submissions.
Once they are satisfied with their ratings, the user can hit the submit button and be taken to a page thanking them for their feedback and asking them if they
would like to take the survey again. If they would like to take another survey they can press the button on the page to restart it.

The tech used in this project were react.js, sql, and redux.

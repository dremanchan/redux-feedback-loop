import React from "react";
import axios from "axios";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./App.css";

// Different pages
import FeelingPage from "../FeelingPage/FeelingPage";
import UnderstandingPage from "../UnderstandingPage/UnderstandingPage";
import SupportedPage from "../SupportedPage/SupportedPage";
import CommentPage from "../CommentPage/CommentPage";
import ReviewPage from "../ReviewPage/ReviewPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route path="/" exact>
          <FeelingPage />
        </Route>

        <Route path="/understanding" exact>
          <UnderstandingPage />
        </Route>

        <Route path="/support" exact>
          <SupportedPage />
        </Route>

        <Route path="/comments" exact>
          <CommentPage />
        </Route>

        <Route path="/review" exact>
          <ReviewPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;

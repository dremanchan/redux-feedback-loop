import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const feedback = (state = {}, action) => {
  console.log(state, action);
  switch (action.type) {
    case ("SET_FEELING_RATING",
    "SET_UNDERSTANDING_RATING",
    "SET_SUPPORTED_RATING",
    "SET_COMMENTS"):
      return {
        ...state,
        [action.payload.property]: action.payload.value,
      };
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feedback,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

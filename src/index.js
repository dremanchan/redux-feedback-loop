import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// This is the reducer that stores all of the feedback
const feedback = (state = {}, action) => {
  console.log(state, action);
  switch (action.type) {
    case ("SET_FEELING_RATING"):
      return {
        ...state,
        [action.payload.property]: action.payload.value,
      };
  } switch (action.type) {
      case ("SET_UNDERSTANDING_RATING"):
          return {
              ...state,
              [action.payload.property]: action.payload.value
          }
    } switch (action.type) {
        case ("SET_SUPPORT_RATING"):
            return {
            ...state,
            [action.payload.property]: action.payload.value
            }
    } switch (action.type) {
        case ("SET_COMMENTS"):
            return {
            ...state,
            [action.payload.property]: action.payload.value    
            }
    } switch (action.type) {
        case ('CLEAR_FEEDBACK'):
            return {};
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

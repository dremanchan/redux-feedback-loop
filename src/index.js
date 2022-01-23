import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedback = (state ={}, action) => {
    console.log(state, action);
    if(action.type === 'SET_FEELING_RATING') {
        return {
            ...state,
            [action.payload.property]: action.payload.value
        }
       
    }
}



const storeInstance= createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger)
)

ReactDOM.render(
<Provider store={storeInstance}>
<App />
</Provider>,
 document.getElementById('root')
 );
registerServiceWorker();

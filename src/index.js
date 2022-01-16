import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider , connect } from 'react-redux';
import {createStore , applyMiddleware , combineReducers} from 'redux';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 
import {createLogger} from 'redux-logger';
import { searchRobots , requestRobots } from './reducer';
import thunkMiddleware from 'redux-thunk';
const logger = createLogger();
const rootReducer = combineReducers({searchRobots , requestRobots})
const store = createStore(rootReducer , applyMiddleware(thunkMiddleware,logger))
ReactDOM.render(<Provider store={store}><App/></Provider> , document.getElementById('root'));
// registerServiceWorker();

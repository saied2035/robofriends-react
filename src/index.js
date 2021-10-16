import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware, combineReducers} from 'redux';
import  thunkMiddleware from 'redux-thunk';
import {searchRobots, requestRobots } from './reducers';
import  App from './containers/app';
import {createLogger} from 'redux-logger'
import './index.css';
import 'tachyons';
   const rootRducer = combineReducers({searchRobots,requestRobots})
   const logger=createLogger();
   const store = createStore(rootRducer,applyMiddleware(thunkMiddleware,logger));
ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
     <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


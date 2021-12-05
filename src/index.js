import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware, combineReducers} from 'redux';
import  thunkMiddleware from 'redux-thunk';
import {searchRobots, requestRobots} from './redux/reducers/reducers';
import  App from './containers/App';
import {createLogger} from 'redux-logger'
import './index.css';
import 'tachyons';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

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
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

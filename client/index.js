/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application. Hangs React app off of #contents in index.html
 *
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './reducers/combinedReducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

render(
  <Provider store={store}>
    <App/>
    </Provider>,
  document.getElementById("root")
);

/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
// import shoutoutReducer from './shoutoutReducer';
import userReducer from './userReducer';
import loginReducer from './loginReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  // shoutoutReducer,
  loginReducer,
  userReducer,
});

// make the combined reducers available for import
export default reducers;

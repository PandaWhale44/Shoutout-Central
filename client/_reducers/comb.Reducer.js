import { combineReducers } from 'redux';

import { authentication } from './authUser.Reducer';
import { registration } from './regisUser.Reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
});

export default rootReducer;
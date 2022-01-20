import { combineReducers } from 'redux';
import { authReducer as auth } from '../reducers';

export const rootReducer = combineReducers({
  auth,
});

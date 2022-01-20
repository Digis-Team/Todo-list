import { combineReducers } from 'redux';
import { authReducer as auth, registerReducer as register } from '../reducers';

export const rootReducer = combineReducers({
  auth,
  register,
});

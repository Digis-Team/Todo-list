import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
// import { composeEnhancers, middleware } from './middleware';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
  // composeEnhancers(applyMiddleware(...middleware)),
);

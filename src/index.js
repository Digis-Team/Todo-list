import React from 'react';
import ReactDOM from 'react-dom';
import './theme/styles/index.css';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './lib/redux/init/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

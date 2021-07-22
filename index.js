import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import appStore from './store';
import App from './page/app';

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  rootElement
)
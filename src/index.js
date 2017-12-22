import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import Dashbaord from './dashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Dashbaord />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

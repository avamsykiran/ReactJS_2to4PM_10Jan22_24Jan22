import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import txnReducer from './stateManagement/txnReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let txnStore = createStore(txnReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={txnStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

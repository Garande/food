import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/themes/app.light.red.scss'
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './assets/plugins/flaticon/flaticon.css';
import './assets/plugins/flaticon2/flaticon.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

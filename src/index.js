import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <i class="fa-solid fa-heart"></i>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

// I could use browser router and see pretty urls like /url/with/some/thing but github pages doesn't work with that so i'm switching to HashRouter
ReactDOM.render((
  // <BrowserRouter basename={process.env.PUBLIC_URL}>
  <HashRouter basename={process.env.PUBLIC_URL}>
    <App></App>
  </HashRouter>
  // </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

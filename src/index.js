import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/js/src/collapse.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import { Helmet } from "react-helmet";
import logo from './appFavicon.ico';
import HeadNavbar from './HeadNavbar.js';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" /> 
      <title>Macro-Analytica</title>
      <link rel="icon" href={logo}></link>
    </Helmet>
    <HeadNavbar />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

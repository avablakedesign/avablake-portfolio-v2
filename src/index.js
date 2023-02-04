//setting up the router and rendering react components to the DOM (Document Object Model).
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./reset.css"
import './index.css';
import App from './App';
//This hash router looks for the # in the path in the url and makes routes after the hashtag.
import {HashRouter} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {Router,browserHistory } from 'react-router';
import { BrowserRouter, Route } from "react-router-dom";
import FilterName from "./FilterNames/FilterName";
import * as serviceWorker from './serviceWorker';
import AboutUs from './AboutUs/AboutUs';

ReactDOM.render(
  <BrowserRouter>
  <div className="App">
      <Route path = "/" component = {App} />
         <Route path = "/about" component = {AboutUs} />
         <Route path = "/filterName" component = {FilterName} />
     
      </div>
      </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
//Service workers are the foundation of building an offline experience. 
//They enable features such as push notifications and background sync.
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import FilterName from "./FilterNames/FilterName";
import * as serviceWorker from "./serviceWorker";
import AboutUs from "./AboutUs/AboutUs";
import UserDetail from "../src/UserDetail/UserDetail";
import "./index.scss";
import App from "./App";
import Context from "./Context/Context";
import HomePage from "./HomePage/HomePage";
import NavBar from './NavBar/NavBar';

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route path="/app" component={HomePage}  component={(props) => <HomePage title='Go Green' />}/>
        <Route path="/about" component={AboutUs} />
        <Route path="/filterName" component={FilterName} />
        <Route path="/userDetail" component={UserDetail} />
        <Route path="/context" component={Context} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
//Service workers are the foundation of building an offline experience.
//They enable features such as push notifications and background sync.

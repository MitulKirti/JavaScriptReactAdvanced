import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FilterName from './FilterNames/FilterName';
import * as serviceWorker from './serviceWorker';
import AboutUs from './AboutUs/AboutUs';
import UserDetail from '../src/UserDetail/UserDetail';
import './index.scss';
import Context from './Context/Context';
import HomePage from './HomePage/HomePage';
import NavBar from './NavBar/NavBar';

ReactDOM.render(
  <BrowserRouter>
    <div className='App'>
      <NavBar />
      <Route exact path='/' component={() => <HomePage heading='Go Green' />} />
      <Switch>
        <Route exact path='/about' component={AboutUs} />
        <Route exact path='/filterName' component={FilterName} />
        <Route exact path='/userDetail' component={UserDetail} />
        <Route exact path='/context' component={Context} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
//Service workers are the foundation of building an offline experience.
//They enable features such as push notifications and background sync.

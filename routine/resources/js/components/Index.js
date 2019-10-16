import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './admin/Header';
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./login/Login";

ReactDOM.render(
  <Router>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/login' component={Login}/>
        <Route path='/admin' component={Header}/>
      </Switch>
  </Router>,
    document.getElementById('app')
);

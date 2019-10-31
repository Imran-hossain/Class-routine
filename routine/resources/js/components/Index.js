import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './admin/Header';
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./login/Login";
import studentHeader from "./student/studentHeader";

ReactDOM.render(
  <Router>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/admin' component={Header}/>
        <Route exact path='/Student' component={studentHeader}/>
        <Route exact path="/*" component={Login} />
      </Switch>
  </Router>,
    document.getElementById('app')
);

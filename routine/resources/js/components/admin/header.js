import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Group from './Group';
import Location from './Location';
import Member from './Member';
import Routine from './Routine';
import Error404 from '../Error404';
export default class Header extends Component {
    render() {
        return (
          <Router>
            <div>

{/* This is done by shoikoth for left sidebar*/}

<div id="wrapper">
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/login">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">
              Admin Panel
            </div>
        </Link>
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">
              <i className="fas fa-fw fa-tachometer-alt" ></i>
              <span>Dashboard</span>
          </Link>
        </li>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <Link className="nav-link" to="/Routine">
            <i className="fas fa-fw fa-table" />
            <span>Class Routine</span>
          </Link>
        </li>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <Link className="nav-link" to="/Group">
            <i className="fas fa-users" />
            <span>Groups</span>
          </Link>
        </li>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <Link className="nav-link" to="/Location">
            <i className="fas fa-map-marked-alt" />
            <span>Locations</span>
          </Link>
        </li>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <Link className="nav-link" to="/Member">
            <i className="fas fa-male" />
            <span>Member</span>
          </Link>
        </li>


      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" >
              <i className="fa fa-bars" />
            </button>
          </nav>

          <Switch>
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/Group' component={Group} />
              <Route exact path='/Location' component={Location} />
              <Route exact path='/Routine' component={Routine} />
              <Route exact path='/Member' component={Member} />
              <Route exact path="/*" component={Error404} />
          </Switch>
        </div>
    </div>

</div>





{/* End of sidebar*/}



            </div>
            </Router>

        );
    }
}
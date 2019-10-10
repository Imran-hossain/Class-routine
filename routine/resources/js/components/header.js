import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Error404 from './Error404';
export default class Header extends Component {
    render() {
        return (

            <div>

{/* This is done by shoikoth for left sidebar*/}

<div id="wrapper">
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
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
          <Link className="nav-link" to="/about">
              <i className="fas fa-fw fa-tachometer-alt" ></i>
              <span>Dashboard</span>
          </Link>
        </li>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <Link className="nav-link" to="/post">
            <i className="fas fa-fw fa-table" />
            <span>Class Routine</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/post">
            <i class="fas fa-users" />
            <span>Groups</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/post">
            <i class="fas fa-map-marked-alt" />
            <span>Locations</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/post">
            <i class="fas fa-universal-access" />
            <span>Member</span>
          </Link>
        </li>


      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>
    <div id="content-wrapper" className="d-flex flex-column">


                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path="/*" component={Error404} />
                </Switch>
    </div>

</div>





{/* End of sidebar*/}



            </div>

        );
    }
}
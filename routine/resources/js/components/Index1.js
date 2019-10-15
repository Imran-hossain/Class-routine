import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import Landing from './Landing';
import Welcome from './Login/Welcome';
import Navbar from './Login/Navbar';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default class Index1 extends Component {
    render() {
        return (
            <div >
                
                <Navbar />
                <Welcome />
                
            </div>
        );
    }
}

if (document.getElementById('App')) {
    ReactDOM.render(<Router><Index1  /></Router>, document.getElementById('App'));
}

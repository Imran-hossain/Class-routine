import React, { Component } from 'react';

export default class Member extends Component {
    render() {
        return (
            <div style={{maxWidth: '500px', marginLeft: '10px'}}>
                <a className="navbar-brand" href="#">Add</a>
                <a className="navbar-brand" href="#">Delete</a>
                <a className="navbar-brand" href="#">Undate</a>
            </div>
        );
    }
}

import React, { Component } from 'react';

export default class Group extends Component {
    render() {
        return (
            <div>
                This is Group.
                <div className = "container">
                    <div className ="row">
                        <div className = "col-md-6 mx-auto">
                            <h1 className="text-center">STUDENT DETAILS</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

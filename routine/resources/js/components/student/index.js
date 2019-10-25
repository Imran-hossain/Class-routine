import React, { Component } from 'react';
import axios from "axios";

export default class Student extends Component {

  constructor(props) {
    super(props);
    this.state = {
      routine: []
    }
    this.getRoutine = this.getRoutine.bind(this);
  }
  getRoutine() {
    var student_email = localStorage.getItem("email");
    var student_token = localStorage.getItem("token");
    console.log(student_email);
    console.log(student_token);

    axios.post(`/api/classroutine`,{
            student_email, 
            student_token
          })
      .then(res => {
        const routine = res.data;
        console.log(routine);
        this.setState({ routine });
      })
  }

    render() {
        return (
          <div className="container">
          <div className="row">
            <div className="card align-middle .col-sm-12 .col-md-8 .col-lg-6 .col-xl-4" >
            {this.getRoutine()}
              <table className="table table-hover">
                <thead>
                  <tr className="table-primary">
                    <th scope="col">Time</th>
                    <th scope="col">Location</th>
                    <th scope="col">Teacher Name</th>
                  </tr>
                </thead>
                <tbody>

                {this.state.routine.map(routine =>
                  <tr className="table-secondary">
                    <th scope="row">{routine.time}</th>
                    <td>{routine.location}</td>
                    <td>{routine.teacher_name}</td>
                  </tr>
                 )}
                </tbody>
              </table>
            </div>
            </div>
            </div>
        );
    }
}

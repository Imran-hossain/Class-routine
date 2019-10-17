import React, { Component } from "react";
import axios from "axios";

export default class Table extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  render() {
    return (
      <table class="table table-hover">
        <thead>
          <tr class="table-primary">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>

        {this.state.persons.map(person =>
          <tr class="table-secondary">
            <th scope="row">{person.id}</th>
            <td>{person.name}</td>
            <td>{person.email}</td>
          </tr>
         )}
        </tbody>
      </table>
    );
  }
}


---->form

 <div className=".col-sm-12 .col-lg-4 .col-md-8">
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pwd"
              />
            </div>
            <button type="submit" className="btn btn-default">
              Submit
            </button>
          </form>
        </div> 
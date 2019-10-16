import React, { Component } from 'react';
import axios from "axios";

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = 
    { 
      error: null,
      user: []
    };
    this.handleClick = this.handleClick.bind(this);
  }



  handleClick() {
      axios.post(`http://127.0.0.1:8001/api/login`,
          {
            "email":"rupa@gmail.com",
            "password":"12345678"
            
          }
        )
        .then(res => {
          let person = res.data;
          console.log(person.token);
          if (person.token) {
            this.props.history.push('/admin');
          }
        })



/*      this.props.history.push('/admin');*/
  }

    render() {
      return (
        <div>
           <div className="container h-100">
                  <div className="d-flex justify-content-center h-100">
                    <div className="user_card">
                      <div className="d-flex justify-content-center">
                        <div className="brand_logo_container">
                          <img
                            src="./img/logo.png"
                            className="brand_logo"
                            alt="Logo"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center form_container">
                        <form onSubmit={this.handleClick}>
                          <div className="input-group mb-3">
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <i className="fas fa-user" />
                              </span>
                            </div>
                            <input type="text"  className="form-control input_user"  placeholder="Email" />
                          </div>
                          <div className="input-group mb-2">
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <i className="fas fa-key" />
                              </span>
                            </div>
                            <input type="password"  className="form-control input_pass"  placeholder="password" />
                          </div>
                          <div className="form-group">
                            <div className="custom-control custom-checkbox">
                              <input  type="checkbox" className="custom-control-input" id="customControlInline" />
                              <label className="custom-control-label" htmlFor="customControlInline" >
                                Remember me
                              </label>
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mt-3 login_container">
                            <button onClick={this.handleClick}  type="button" name="button" className="btn login_btn">
                              Login
                            </button>
                          </div>

                        </form>
                      </div>

                      <div className="mt-4">
                        <div className="d-flex justify-content-center links">
                          <a href="#">Forgot your password?</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
        );
    }
}
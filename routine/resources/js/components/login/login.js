import React, { Component } from 'react';
import axios from "axios";

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = 
    {
      disabled: false,
      error: null,
      email:'',
      password:'',
      user: []
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleEmail(e){
    this.setState({email: e.target.value});
  }
  handlePassword(e){
    this.setState({password: e.target.value});
  }
  loginCheck(){
      if (localStorage.getItem("token") != null) {
          if(localStorage.getItem("type")=='student' ){
            this.props.history.push('/student');
          }
          else if(localStorage.getItem("type")=='admin' ){
            this.props.history.push('/admin');
          }
      }

    }


  handleSubmit(event) {
    event.preventDefault();
    this.setState( {disabled: !this.state.disabled} );

    console.log("Email: " + event.target[0].value);
    console.log("Password: " + event.target[1].value);




    var email = event.target[0].value;
    var password = event.target[1].value;
    localStorage.setItem('password', password);

      axios.post(`/api/login`,{
            email, 
            password
          })
        .then(res => {
          let person = res.data;
          console.log(res.data);
          if (person.user.token) {
           localStorage.setItem('token', person.user.token);
           localStorage.setItem('email', person.user.email);
           localStorage.setItem('name', person.user.name);
           localStorage.setItem('type', person.user.type);
           if (person.user.type == 'admin') {
             this.props.history.push('/admin');
           }
           else{
             this.props.history.push('/student');
           }
           

          }
        })
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
                        <form onSubmit={this.handleSubmit}>
                          <div className="input-group mb-3">
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <i className="fas fa-user" />
                              </span>
                            </div>
                            <input onClick={this.handleEmail} type="text"  className="form-control input_user"  placeholder="Email" />
                          </div>
                          <div className="input-group mb-2">
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <i className="fas fa-key" />
                              </span>
                            </div>
                            <input onClick={this.handlePassword} type="password"  className="form-control input_pass"  placeholder="password" />
                          </div>
                            <input disabled = {(this.state.disabled)? "disabled" : ""}   type="submit" name="button" className="btn login_btn" value="Login"/>

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
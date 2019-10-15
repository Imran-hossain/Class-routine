import React, { Component } from 'react';
import "./App.css";

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-z0-9-]+(?:\.[a-zA-z0-9-]+)*$/)

const formValid = formErrors => {
	let valid = true;
	
	Object.values(formErrors).forEach(val =>{
		val.length > 0 && (valid= false);
	});
	
	return valid;
	
};
class App extends Component {
	constructor(props){
		super(props);
		
		this.state={
			
			email: null,
			password: null,
			fontErrors: {
				
				email: "",
				password: ""
				
			}
		};
	}
		handleSubmit = e => {
			e.preventDefault();
			if(formValid(this.state.formErrors)){
				console.log(`
				--SUBMITTING--
				
				Email: ${this.state.email}
				Password: ${this.state.password}
				`);
			}
else{
console.error("FROM INVALID - DISPLAY ERROR MESSAGE");	
		}
		};
		handleChange = e =>{
			e.preventDefaulf();
			const {name, value} = e.target;
			let formErrors = this.state.formErrors;
			console.log("Name")
			switch (name){
				  case "email":
				formErrors.email= emailRegex.test(value) && value.lenth > 0
				? ''
				: "invalid email address";
				  break;
				  case "password":
				formErrors.password= value.length < 6 && value.lenth > 0?  
				"minimum 6 charesters required":"";

                  
				  break;
				  default:
				  break;
				}
			
			this.setState({ formErrors, [name]: value }, () => console.log(this.state));
		
		};
		
  render() {
	  
	  const {formErrors} = this.state;
    return <div className="wrapper">
        <div className="form-wrapper">
		<h1>Log In</h1>
		<form onSubmit={this.handleSubmit} noValidate>
		
		<div className="email">
		<label htmlFor="email">Email</label>
         <input 
		 type="text" 
		 className=""
		 placeholder="email"
		 type="text"
		 name="email"
		 noValidate
		 onchange={this.handleChange}
		 />
		 {formErrors.email.length > 0 && (
		 <span className="errorMessage">{formErrors.email}</span>
		 )}
		</div>
		
		<div className="password">
		<label htmlFor="password">Password</label>
         <input 
		 type="text" 
		 className=""
		 placeholder="password"
		 type="text"
		 name="password"
		 noValidate
		 onchange={this.handleChange}
		 />
		 {formErrors.password.length > 0 && (
		 <span className="errorMessage">{formErrors.password}</span>
		 )}
		</div>
		
		<div className="confirm password">
		<label htmlFor="confirm password">Confirm Password</label>
         <input 
		 type="text" 
		 className=""
		 placeholder="confirm password"
		 type="text"
		 name="confirmpassword"
		 noValidate
		 onchange={this.handleChange}
		 />
		 {formErrors.confirmpassword.length > 0 && (
		 <span className="errorMessage">{formErrors.confirmpassword}</span>
  )}}
		</div>
		
		<div className="login">
      <button type="submit">Create Account</button>
       <small href="/App.js">Sign Up</small>

	  
    </div>
		</form>
		</div>
		;</div>
    
  }
}
export default App;
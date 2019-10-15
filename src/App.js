import React, { Component } from 'react';
import "./App.css";


const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-z0-9-]+(?:\.[a-zA-z0-9-]+)*$/)

const formValid = {formErrors, ...rest} => {
	let valid = true;
	
	Object.values(formErrors).forEach(val =>{
		val.length > 0 && (valid= false);
	});
	Object.values(rest).forEach(val => {
		val === null && (valid = false);
	});
	
	return valid;
	
};
class App extends Component {
	constructor(props){
		super(props);
		
		this.state={
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			fontErrors: {
				firstName:"",
				lastName:"",
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
				First Name: ${this.state.firstName}
				Last Name: ${this.state.lastName}
				Email: ${this.state.email}
				Password: ${this.state.password}
				`);
			}
else{
console.error("FROM INVALID - DISPLAY ERROR MESSAGE");	
		}
		};
		handleChange = e => {
			e.preventDefaulf();
			const {name, value} = e.target;
			let formErrors = this.state.formErrors;
			console.log("Name")
			console.log("value")
			switch (name){
				case "firstName":
				formErrors.firstName= value.length < 3 && value.lenth> 0? 
				"minimum 6 charesters required":"";
				  break;
				  case "lastName":
				formErrors.lastName= value.length < 3 && value.lenth > 0? 
				"minimum 6 charesters required":"";
				  break;
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
		<h1>Create Account</h1>
		<form onSubmit={this.handleSubmit} noValidate>
		<div className="firstName">
		<label htmlFor="firstName">First Name</label>
         <input 
		 className={formErrors.firstName.length > 0 ? "error" : null}
		 type="text" 
		 placeholder="First Name"
		 type="text"
		 name="firstName"
		 noValidate
		 onChange={this.handleChange}
		 />
		 {formErrors.firstName.length > 0 && (
		 <span className="errorMessage">{formErrors.firstName}</span>
		 )}
		</div>
		
		<div className= "lastName">
		<label htmlFor="lastName">Last Name</label>
         <input 
		 type="text" 
		 className={formErrors.lastName.length > 0 ? "error" : null}
		 placeholder="Last Name"
		 type="text"
		 name="lastName"
		 noValidate
		 onchange={this.handleChange}
		 />
		 {formErrors.lastName.length > 0 && (
		 <span className="errorMessage">{formErrors.lastName}</span>
		 )}
		</div>
		
		<div className="email">
		<label htmlFor="email">Email</label>
         <input 
		 type="text" 
		 className={formErrors.email.length > 0 ? "error" : null}
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
		
		<div className="createAccount">
      <button type="submit">Create Account</button>
       <small href="/Login">Already Have an Account</small>

    </div>
		</form>
		</div>
		;</div>
    
  }
}
export default App;
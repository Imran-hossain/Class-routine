import React, { Component } from 'react';
import './App.css';
import Login from "./jsx/Login";
import Signup from "./jsx/Signup";
import Home from "./jsx/Home";
import drop from "./jsx/Drag";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
constructor(props) {
super(props);
this.state = {
buttonValue: "Click to login",
renderLogin: false
};
}
_login_click = () => {
this.setState({renderLogin: true});
}


render() {
return (
<Router>
<Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/drag">
            <Drag />

        </Switch>
</Router>


)
}

}


export default App;

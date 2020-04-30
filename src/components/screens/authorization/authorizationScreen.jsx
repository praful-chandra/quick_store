import React, { Component } from "react";
import {Link,withRouter} from "react-router-dom";
import Login from "./login_component";
import SignUp from "./signup_component";

import "./authorization_style.scss";
const logo = require("../../../assets/images/logox2.PNG");



class Authorization extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  
  render() {      
      
    return (
      <div className="authScreen-wrapper">
        <div className="authScreen-logo">
         <Link to="/">
         <img src={logo} alt="Quick shop LOGO" />
         </Link>
        </div>
        <div className="authScreen-content">
            {
                this.props.match.params.type === "login" ? <Login /> : <SignUp />
            }
        </div>
      </div>
    );
  }
}

export default withRouter(Authorization);

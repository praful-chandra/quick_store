import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

import "./authorization_style.scss";
import Axios from "axios";

const GoogleLogo = require("../../../assets/images/Google-Logo.png");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error : ""
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("/api/auth/user/login",{
      email : this.state.email,
      password : this.state.password
    }).then(result=>{

       if(result.data.token){
          this.props.history.push(`/handleToken/${result.data.token}`);
       }
    }).catch(err=>{    
      if(err)  
      this.setState({
        error : "Auth Error"
      })
    })
  };


  render() {
    return (
      <div className="auth-form">
        <div className="auth-form-header">Login</div>
        {
          this.state.error ? <div className="auth-form-error">
            <span className="auth-form-error-message">{this.state.error}</span>
            <span className="auth-form-error-close" onClick={()=>{this.setState({error : ""})}}>
              <FontAwesomeIcon icon={faWindowClose} />
            </span>
        </div> : null
        }
        <div className="auth-form-form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={this.state.email}
              onChange={this.onChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.onChange}
              required
            />
            <input
              type="submit"
              value="Login"
              className="auth-form-form-submitBtn"   
            />
          </form>
          -OR-
          <div className="auth-form-google">   
            <img src={GoogleLogo} alt="" />
          <a href="/api/auth/user/google">  <span>Login With Google</span></a>
          </div>
          <span className="auth-form-link">
            <Link to="/auth/signup"> New here ? SignUp instead </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);

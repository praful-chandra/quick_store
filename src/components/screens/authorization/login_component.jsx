import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./authorization_style.scss";

const GoogleLogo = require("../../../assets/images/Google-Logo.png");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };


  render() {
    return (
      <div className="auth-form">
        <div className="auth-form-header">Login</div>
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
          <a href="/auth/user/google">  <span>Login With Google</span></a>
          </div>
          <span className="auth-form-link">
            <Link to="/auth/signup"> New here ? SignUp instead </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Login;

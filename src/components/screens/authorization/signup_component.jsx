import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./authorization_style.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
        <div className="auth-form-header">SignUp</div>
        <div className="auth-form-form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="email"
              id=""
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
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={this.onChange}
              required
            />

            <input
              type="submit"
              value="SignUp"
              className="auth-form-form-submitBtn"
            />
          </form>

          <span className="auth-form-link">
            <Link to="/auth/login"> Already a member ? Login instead </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default SignUp;

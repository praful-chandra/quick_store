import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import {withRouter} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";


import "./authorization_style.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      error :""
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("/api/auth/user/signin",{
      email : this.state.email,
      password : this.state.password,
      userName : this.state.name
    }).then(result=>{
      
       if(result.data.token){
          this.props.history.push(`/handleToken/${result.data.token}`);
       }
    }).catch(err=>{                
      if(err)  
      this.setState({
        error :err.response.data.error
      })
    })
  };

  render() {
    return (
      <div className="auth-form">
        <div className="auth-form-header">SignUp</div>
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

export default withRouter(SignUp);

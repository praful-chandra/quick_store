//Importing Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

//Importing Styles
import "./navbar_style.scss";
//redux Actions
import { setCurrentUser } from "../../redux/actions/user-actions";

//LOGO
const logo = require("./../../assets/images/logo.png");

//TODO : Create dropDown menu for signout

class Navbar extends Component {
  signoutUser = () => {
    let user = null;

    this.props.setCurrentUser(user);
    localStorage.removeItem("jwtToken");
  };

  render() {
    const user = this.props.user.currentUser;

    return (
      <div className="navBar">
        {/* Logo navbar to the loft */}

        <Link to="/">
          <div className="navBar-logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div className="navBar-search">
          {/* TODO: Add search functionality to the app */}

          {/* <input
          type="search"
          name="search"
          id="search"
          className="navBar-search-bar"
          placeholder="Search for some items .. "
        /> */}
        </div>

        {/* NavBAr Right Items */}

        <div className="navBar-right">
          {user ? (
            <span>
              {/*  SignedIN user */}
              <div className="navBar-right-cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>
                  Cart <span className="navBar-right-cart-count">9+</span>{" "}
                </span>
              </div>

              <div className="navBar-right-user">
                <div className="navBar-right-user-name">
                  <span>Hello</span>
                  {user.userName}
                </div>
                {/* TODO : Create dropDown menu for signout */}
                <span style={{ cursor: "pointer" }} onClick={this.signoutUser}>
                  signout
                </span>
              </div>
            </span>
          ) : (
            <div className="navBar-right-user">
              {/* Not SignedIN */}
              <div className="navBar-right-user-name">
                <Link to="/auth/login">
                  {" "}
                  <span>Login</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { setCurrentUser })(Navbar);

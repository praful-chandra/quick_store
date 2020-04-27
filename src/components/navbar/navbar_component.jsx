import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./navbar_style.scss";

const logo = require("./../../assets/images/logo.png");

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navBar">
        <Link to="/">
          <div className="navBar-logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div className="navBar-search">
          {/* <input
          type="search"
          name="search"
          id="search"
          className="navBar-search-bar"
          placeholder="Search for some items .. "
        /> */}
        </div>
        <div className="navBar-right">
          <div className="navBar-right-cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>
              Cart <span className="navBar-right-cart-count">9+</span>{" "}
            </span>
          </div>
          {/*  SignedIN user */}
          <div className="navBar-right-user">
            <div className="navBar-right-user-picture">
              <img src="https://robohash.org/1" alt="dp"  />
            </div>
            <div className="navBar-right-user-name">
              <span>Hello</span>
              {"User name"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

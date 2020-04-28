//Importing Dependencies
import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

//importing Styles
import "./App.scss";

//Importing custom components
import Navbar from "./components/navbar/navbar_component";
import HomeScreen from "./components/screens/HomeScreen/homeItems_screen";
import Allcategory from "./components/screens/allcategory/allcategory_screen";
import CategoryScreen from "./components/screens/category/category_screen";
import AuthorizationScreen from "./components/screens/authorization/authorizationScreen";
import AuthHandleToken from "./components/auth_TokenHandler";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        {this.props.history.location.pathname.includes("/auth") ||
        this.props.history.location.pathname.includes("/handleToken") ? null : (
          <Navbar />
        )}
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/category" component={Allcategory} />
        <Route exact path="/category/:id" component={CategoryScreen} />
        <Route exact path="/auth/:type" component={AuthorizationScreen} />
        <Route exact path="/handleToken/:token" component={AuthHandleToken} />
      </div>
    );
  }
}

export default withRouter(App);

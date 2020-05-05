//Importing Dependencies
import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import Axios from "axios";
//importing Styles
import "./App.scss";

//Importing custom components
import AuthHandleToken from "./components/auth_TokenHandler";
import Navbar from "./components/navbar/navbar_component";
import HomeScreen from "./components/screens/HomeScreen/homeItems_screen";
import Allcategory from "./components/screens/allcategory/allcategory_screen";
import CategoryScreen from "./components/screens/category/category_screen";
import AuthorizationScreen from "./components/screens/authorization/authorizationScreen";
import CheckoutScreen from "./components/screens/checkout/checkout-screen";

//Redux
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/actions/user-actions";
//Import Selectors
import { getCurrentUser } from "./redux/selectors/users-selector";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  async componentDidMount() {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      Axios.defaults.headers.post["Authorization"] = token;
      const result = await Axios.post("/api/auth/user/validateuser");
      this.props.setCurrentUser({ ...result.data });
    }


  }

  static getDerivedStateFromProps(props, state) {
    if(props.location.state === 'flusher'){
        console.log(props);
        return {currentUser : 34}
    }
    return null;
  }



  render() {    
    return (
      <div className="app">
        <Route exact path="/handleToken/:token" component={AuthHandleToken} />

        {this.props.history.location.pathname.includes("/auth") ||
        this.props.history.location.pathname.includes("/handleToken") ? null : (
          <div>
            <Navbar />
            <div className="spacer"></div>
          </div>
        )}
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/category" component={Allcategory} />
        <Route exact path="/category/:id" component={CategoryScreen} />
        <Route
          exact
          path="/auth/:type"
          render={() => {
            return this.props.currentUser ? (
              <Redirect to="/" />
            ) : (
              <AuthorizationScreen />
            );
          }}
        />
        <Route exact path="/checkout" component={CheckoutScreen} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state),
});

export default connect(mapStateToProps, { setCurrentUser })(withRouter(App));

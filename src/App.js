//Importing Dependencies
import React, { Component } from "react";
import { Route, withRouter,Redirect } from "react-router-dom";
import Axios from "axios";
//importing Styles
import "./App.scss";

//Importing custom components
import Navbar from "./components/navbar/navbar_component";
import HomeScreen from "./components/screens/HomeScreen/homeItems_screen";
import Allcategory from "./components/screens/allcategory/allcategory_screen";
import CategoryScreen from "./components/screens/category/category_screen";
import AuthorizationScreen from "./components/screens/authorization/authorizationScreen";
import AuthHandleToken from "./components/auth_TokenHandler";

//Redux
import { connect } from "react-redux";
import {setCurrentUser} from "./redux/actions/user-actions";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    
  }

async componentDidMount(){
  const token = localStorage.getItem("jwtToken");

  if (token) {
    Axios.defaults.headers.post["Authorization"] = token;    
    const result = await Axios.post("/api/auth/user/validateuser")    
    this.props.setCurrentUser({...result.data});
  }

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
        <Route exact path="/auth/:type" render= {()=>{
         return this.props.user ? <Redirect to="/" /> : <AuthorizationScreen />
        }} />
        <Route exact path="/handleToken/:token" component={AuthHandleToken} />
      </div>
  
    );
  }
}

const mapStateToProps = state =>({
  user : state.user.currentUser
})


export default connect(mapStateToProps,{setCurrentUser})(withRouter(App));

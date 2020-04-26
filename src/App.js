import React,{Component} from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import './App.scss';


import Navbar from "./components/navbar/navbar_component";
import HomeItems from "./components/HomeItems/homeItems_component";
import HatScreen from "./components/screens/hats/hat_screen";

class App extends Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){    
  
    return (
      <Switch>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={HomeItems}  />
          <Route exact path="/hats" component={HatScreen} />
      </div>
      </Switch>
    );
  }
}

export default withRouter(App);

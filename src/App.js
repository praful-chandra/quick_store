import React,{Component} from 'react';
import {Route,withRouter} from 'react-router-dom';
import './App.scss';


import Navbar from "./components/navbar/navbar_component";
import HomeItems from "./components/HomeItems/homeItems_component";
import Allcategory from "./components/screens/allcategory/allcategory_screen";
import CategoryScreen from "./components/screens/category/category_screen";


class App extends Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){    
  
    return (
    
        <div className="app">
          <Navbar/>
          <Route exact path="/" component={HomeItems}  />
          <Route exact path="/category" component={Allcategory} />
          <Route exact path="/category/:id" component={CategoryScreen} />
      </div>
      
    );
  }
}

export default withRouter(App);

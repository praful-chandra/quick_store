//Renders the All category page..

import React, { Component } from "react";
import {connect} from "react-redux";
import OddProduct from "../../products/oddProduct_component";
import EvenProduct from "../../products/evenProduct_component";

import { fetchItemsAsync } from "../../../redux/actions/items-actions";

import "./allcategory_styles.scss";

class AllcategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount() {
    let categories = this.props.items;
    if(!categories){
     this.props.fetchItemsAsync();
    }

  }
  render() {
 
    
    return (
    this.props.items ?   <div className="products-wrapper">
    {this.props.items.map((data, index) => {
      if (index % 2 === 0)
        return <OddProduct key={data._id} category={data} />;
      else return <EvenProduct key={data._id} category={data} />;
    })}
  </div> : <div>Loading....</div>
    );
  }
}

const mapStateToProps = state =>({
  items : state.items.items
})

export default connect(mapStateToProps,{fetchItemsAsync})(AllcategoryScreen);

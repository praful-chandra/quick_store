//Renders the All category page..

import React, { Component } from "react";

import OddProduct from "../../products/oddProduct_component";
import EvenProduct from "../../products/evenProduct_component";

import "./allcategory_styles.scss";

class AllcategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    let categories = require("../../../data/dummyCategories").default;
    this.setState({
      categories,
    });
  }
  render() {
    return (
      <div className="products-wrapper">
        {this.state.categories.map((data, index) => {
          if (index % 2 === 0)
            return <OddProduct key={data.id} category={data} />;
          else return <EvenProduct key={data.id} category={data} />;
        })}
      </div>
    );
  }
}

export default AllcategoryScreen;

//Renders the All category page..

import React, { Component } from "react";
import {connect} from "react-redux";
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
    let categories = this.props.items;
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

const mapStateToProps = state =>({
  items : state.items.items
})

export default connect(mapStateToProps)(AllcategoryScreen);

//renders the individual category

import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import ProductItem from "../../products/productItem";

import "./category_styles.scss";

class HatScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: require("../../../data/dummyCategories").default.filter(
        (cate) => cate.id === Number(this.props.match.params.id)
      )[0],
      loaded: false,
    };
  }

  componentDidMount() {
    if (this.state.category !== undefined) {
      this.setState({
        loaded: true,
      });
    }
  }

  render() {
    if (!this.state.loaded) return <h1>Category not Found</h1>;
    return (
      <div className="category-wrapper">
      {/* Main Heading Tile */}
        <div
          className="category-hero"
          style={{ backgroundImage: `url(${this.state.category.imageUrl})` }}
        >
          <span className="category-hero-title">
            {this.state.category.title}
          </span>
        </div>

        {/* All items Grid */}

        <div className="category-items">
          {this.state.category.items.map((item, index) => {
            return <ProductItem item={item} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(HatScreen);

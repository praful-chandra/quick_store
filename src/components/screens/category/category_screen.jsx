//renders the individual category

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {connect} from "react-redux";
import ProductItem from "../../products/productItem";
import Axios from "axios";
import "./category_styles.scss";

class HatScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: null,
      loaded: false,
    };
  }

 async componentDidMount() {

    let category = await Axios.post("/api/shop/itembyid",{
      id : this.props.match.params.id
    })
    category = category.data;
    if (category) {
      this.setState({
        loaded: true,
        category
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

const mapStateToProps = state =>({
  items : state.items.items
})

export default connect(mapStateToProps)(withRouter(HatScreen));

//Importing Dependencies
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

//Importing Custom COmponents
import ProductHeading from "./product_heading";
import ProductTiles from "./productTiles_component";

import "./product_styles.scss";

class EvenProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
    };
  }

  //This enables the button on the carosol to work
  scroll(direction, elemId) {
    let element = document.getElementById(elemId);

    let currentScroll = element.scrollLeft;

    if (direction === "left") element.scrollTo(currentScroll - 300, 0);
    else element.scrollTo(currentScroll + 300, 0);
  }

  render() {
    return (
      <div className="productTile-wrapper">
        {/* Heading to the ProductTile */}

        <ProductHeading
          item={this.state.category}
          history={this.props.history}
        />

        {/* Carasol --- pass the above scroll function  */}
        {/* This scroll function binds with the id, so *ID must be there to Every Component* */}

        <ProductTiles category={this.state.category} scroll={this.scroll} />
      </div>
    );
  }
}

export default withRouter(EvenProduct);

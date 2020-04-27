import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import ProductItem from "./productItem";

import "./product_styles.scss";

class EvenProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
    };
  }

  scroll(direction, elemId) {
    let element = document.getElementById(elemId);

    let currentScroll = element.scrollLeft;

    if (direction === "left") element.scrollTo(currentScroll - 300, 0);
    else element.scrollTo(currentScroll + 300, 0);
  }

  render() {

    
    return (
      <div className="evenProduct-wrapper">
        <div className="evenProduct-left product-details-wrapper">
          <div className="product-details">
            <div className="product-details-title">
              {this.state.category.title}
            </div>
            <div className="product-details-button" onClick={()=>{
              this.props.history.push(`/category/${this.state.category.id}`)
            }}>Shop Now</div>
          </div>
        </div>
        <div className="evenProduct-right">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="product-scrollers"
            onClick={() => {
              this.scroll("left", `productWrapper${this.state.category.id}`);
            }}
          />
          <div
            className="product-items-wrapper"
            id={`productWrapper${this.state.category.id}`}
          >
            {this.state.category.items.map((data, index) => {
              return (
                <ProductItem
                  key={data.id}
                  item={{
                    imageUrl: data.imageUrl,
                    name: data.name,
                  }}
                />
              );
            })}
          </div>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="product-scrollers"
            onClick={() => {
              this.scroll("right", `productWrapper${this.state.category.id}`);
            }}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(EvenProduct);

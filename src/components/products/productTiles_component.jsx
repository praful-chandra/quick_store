//This comonent adds the carosol to the whole product tiles
//must use with the container with fixed width

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import ProductItem from "./productItem";

function ProductTiles(props) {
  let category = props.category;

  return (
    <div className="product-tiles">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="product-scrollers"
        onClick={() => {
          props.scroll("left", `productWrapper${category.id}`);
        }}
      />
      <div
        className="product-items-wrapper"
        id={`productWrapper${category.id}`}
      >
        {category.items.map((data, index) => {
          return <ProductItem  key={data._id} item={data} />;
        })}
      </div>
      <FontAwesomeIcon
        icon={faArrowRight}
        className="product-scrollers"
        onClick={() => {
          props.scroll("right", `productWrapper${category.id}`);
        }}
      />
    </div>
  );
}

export default ProductTiles;

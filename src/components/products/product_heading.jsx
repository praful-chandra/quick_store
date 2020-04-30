import React from "react";
import ProductHeadingButton from "./product-heading-button";

function ProductHeading(props) {
  let { title, id } = props.item;

  return (
      <div className="product-heading">
        <div className="product-heading-title">{title}</div>
        <ProductHeadingButton history={props.history} redirectUrl={`/category/${id}`} text="Shop Now" />
    </div>
  );
}

export default ProductHeading;

import React from "react";

function ProductHeading(props) {
  let { title, id } = props.item;

  return (
      <div className="product-heading">
        <div className="product-heading-title">{title}</div>
        <div
          className="product-heading-button"
          onClick={() => {
            props.history.push(`/category/${id}`);
          }}
        >
          Shop Now
      </div>
    </div>
  );
}

export default ProductHeading;

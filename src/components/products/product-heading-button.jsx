import React from "react";


function ProductHeadingButton({history , redirectUrl , text}) {
    return (
    <div
          className="product-heading-button"
          onClick={() => {
            history.push(redirectUrl);
          }}
        >
          {text}
      </div>)
}

export default ProductHeadingButton;
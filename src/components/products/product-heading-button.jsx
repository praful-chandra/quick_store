import React from "react";


function ProductHeadingButton({history , redirectUrl , text ,callBack}) {
    return (
    <div
          className="product-heading-button"
          onClick={() => {
            if(callBack) callBack();
            history.push(redirectUrl);
          }}
        >
          {text}
      </div>)
}

export default ProductHeadingButton;
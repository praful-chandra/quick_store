import React from "react";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {addItemsToCart} from "../../redux/actions/cart-actions";

function ProductItem(props) {
  let item = props.item;

  const addItemToCartFn = (item) => {
    props.addItemsToCart(item)
  };
  return (
  <div>
        <div
    
      style={{ backgroundImage: `url(${item.imageUrl})` }}
      className="product-items-item"
    >
      <div className="product-items-item-info-addCart"   onClick={() => addItemToCartFn(item)}>
          <FontAwesomeIcon icon={faPlus} />
      </div>
      <div className="product-items-item-info">
        <div className="product-items-item-info-title">
        {item.name}
        {/* <span className="product-items-item-info-price">Rs.{item.price}</span> */}

        </div>

      </div>

    </div>

  
  </div>
  );
}

export default connect(null,{addItemsToCart})(ProductItem);

import React from "react";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";


//Import CartActions
import {removeItemsFromCart} from "../../redux/actions/cart-actions";

import "./cartItem-styles.scss";

function CartItem({item,removeItemsFromCart,size}) {    
    console.log("rendered");
    

    const style={
        backgroundImage : `url(${item.imageUrl})` ,
    }

    return <div className="cartItem-wrapper">
        <div className="cartItem-img" style={style}></div>
        <div className="cartItem-info">
            <div className="cartItem-info-name">{item.name}</div>
            <div className="cartItem-info-price">Rs.{item.price}</div>
        </div>
        <div className="cartItem-qty">
            <div className="cartItem-qty-text">
            {item.quantity}
            </div>
        </div>
        <div className="cartItem-remove">
            <FontAwesomeIcon icon={faTrash} onClick={()=>removeItemsFromCart(item.id)} />
        </div>
    </div>
}

export default connect(null,{removeItemsFromCart})(CartItem);
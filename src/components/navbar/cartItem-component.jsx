import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";


import "./cartItem-styles.scss";

function CartItem({item,deleteCB}) {    
    
    
    return <div className="cartItem-wrapper">
        <div className="cartItem-img" style={{backgroundImage : `url(${item.imageUrl})`}}></div>
        <div className="cartItem-info">
            <div className="cartItem-info-name">{item.name}</div>
            <div className="cartItem-info-price">Rs.{item.price}</div>
            <div className="cartItem-info-qty">Qty {item.quantity}</div>
        </div>
        <div className="cartItem-remove">
            <FontAwesomeIcon icon={faTrash} onClick={()=>deleteCB(item.id)} />
        </div>
    </div>
}

export default CartItem;
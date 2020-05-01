import React from "react";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash,faCaretUp,faCaretDown} from "@fortawesome/free-solid-svg-icons";

import {removeItemsFromCart,increaseItemCount,decreaseItemCount} from "../../../redux/actions/cart-actions";

import "./checkout-styles.scss";


function CheckoutItem(props) {
    let item  = props.item
    return(
        <div className="checkoutItem">
            <div style={{backgroundImage:`url(${item.imageUrl})`}} className="checkoutItem-img" > </div>
            <div className="checkoutItem-name">{item.name}</div>
            <div className="checkoutItem-price">
            Rs. {item.price} X 
            <FontAwesomeIcon icon={faCaretUp}  style={{cursor:"pointer"}} onClick={()=>props.increaseItemCount(item.id)}/>

             {item.quantity}
               <FontAwesomeIcon icon={faCaretDown} style={{cursor:"pointer"}} onClick={()=>props.decreaseItemCount(item.id)}/>
            </div>
            <div className="checkoutItem-totalPrice">
               Rs. {item.price * item.quantity}
            </div>
        
            <div className="checkoutItem-remove" onClick={()=>removeItemsFromCart(item.id)}>
            <FontAwesomeIcon icon={faTrash} />
             </div>
        </div>
    )
}



export default connect(null,{removeItemsFromCart,increaseItemCount,decreaseItemCount})(CheckoutItem);
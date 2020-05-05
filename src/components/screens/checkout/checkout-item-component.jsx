import React from "react";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash,faCaretUp,faCaretDown} from "@fortawesome/free-solid-svg-icons";

import {removeItemsFromCart,increaseItemCount,decreaseItemCount} from "../../../redux/actions/cart-actions";


import "./checkout-styles.scss";


function CheckoutItem(props) {
    
    return(
        <div className="checkoutItem">
            <div style={{backgroundImage:`url(${props.item.imageUrl})`}} className="checkoutItem-img" > </div>
            <div className="checkoutItem-name">{props.item.name}</div>
            <div className="checkoutItem-price">
            Rs. {props.item.price} X 
            <FontAwesomeIcon icon={faCaretUp}  style={{cursor:"pointer"}} onClick={()=>{props.increaseItemCount(props.item._id)}}/>

             {props.item.quantity}
               <FontAwesomeIcon icon={faCaretDown} style={{cursor:"pointer"}} onClick={()=>{props.decreaseItemCount(props.item._id)}}/>
            </div>
            <div className="checkoutItem-totalPrice">
               Rs. {props.item.price * props.item.quantity}
            </div>
        
            <div className="checkoutItem-remove" >
            <FontAwesomeIcon icon={faTrash}  onClick={()=>{props.removeItemsFromCart(props.item._id)}}/>
             </div>
        </div>
    )
}




export default connect(null,{removeItemsFromCart,increaseItemCount,decreaseItemCount})(CheckoutItem);
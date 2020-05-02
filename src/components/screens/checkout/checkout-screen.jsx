import React,{Component} from "react";
import {connect} from "react-redux";
import {getCartItems,getTotalCartAmount} from "../../../redux/selectors/cart-selectors";

import CheckoutItem from "./checkout-item-component";




import "./checkout-styles.scss";

class CheckoutScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="checkout-wrapper">
                <div className="checkout-header">
                    <div className="checkout-header-img">Product</div>
                    <div className="checkout-header-name">Title</div>
                    <div className="checkout-header-price">Price X Qty</div>
                    <div className="checkout-header-totalPrice">Total Price</div>
                    <div className="checkout-header-remove">Remove</div>
                </div>
               {
                   this.props.cartItems.map(item=> <CheckoutItem key={item.id} item={item}/>)
               }

               <div className="checkout-total">
                Total :  Rs. {this.props.totalAMount}
               </div>
            </div>
        );
    }
}


const mapoStateToProps = state =>({
    cartItems : getCartItems(state),
    totalAMount : getTotalCartAmount(state)
})

export default connect(mapoStateToProps)(CheckoutScreen);
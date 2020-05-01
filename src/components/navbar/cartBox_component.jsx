import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

//import other components
import ProductHeadingButton from "../products/product-heading-button";
import CartItem from "./cartItem-component";

//Import CartActions
import {removeItemsFromCart} from "../../redux/actions/cart-actions";

//Import Selectors 
import {getCartItems} from "../../redux/selectors/cart-selectors";

class cartBox_component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showConent: false
    };
  }

removeItem=(id)=>{
  this.props.removeItemsFromCart(id)
    
  }


  render() {    
    return (
      <div className="navBar-right-cart">
        <span
          className="navBar-right-cart-tile"
          onClick={() => this.setState({ showConent: !this.state.showConent })}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>
            Cart <span className="navBar-right-cart-count">{this.props.cartItems.length}</span>{" "}
          </span>
        </span>
        {this.state.showConent ? (
          <div className="navBar-right-cart-content">
            <div className="navBar-right-cart-content-items-wrapper">
                {  this.props.cartItems.map(item=><CartItem key={item.id} item={item} deleteCB={this.removeItem}/>)}
            </div>
            <ProductHeadingButton
              history={this.props.history}
              text="CheckOut"
              redirectUrl="/category"
            />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state =>({
    cartItems : getCartItems(state)
})

export default connect(mapStateToProps,{removeItemsFromCart})(withRouter(cartBox_component));

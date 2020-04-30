import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEMS_FROM_CART,
} from "../actions/action-Types";

import { addToCart ,removeItemFromCart} from "../utils/cartUtil";
const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      let newItem = action.payload;

      return {
        ...state,
        cartItems: addToCart(state.cartItems, newItem),
      };
    }

    case REMOVE_ITEMS_FROM_CART: {        
        let oldId = action.payload;
        
        return {
            ...state,
            cartItems : removeItemFromCart(state.cartItems,oldId)
        }
    }

    default:
      return state;
  }
};

export default cartReducer;

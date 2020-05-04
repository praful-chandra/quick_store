import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEMS_FROM_CART,
  INCREASE_ITEM_COUNT,
  DECREASE_ITEM_COUNT,
} from "../actions/action-Types";

import {
  addToCart,
  removeItemFromCart,
  increaseItemCount,
  decreaseItemCount,
} from "../utils/cartUtil";



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
        cartItems: removeItemFromCart(state.cartItems, oldId),
      };
    }

    case INCREASE_ITEM_COUNT: {
      let Id = action.payload;
      return {
        ...state,
        cartItems: increaseItemCount(state.cartItems, Id),
      };
    }

    case DECREASE_ITEM_COUNT: {
      let Id = action.payload;
      return {
        ...state,
        cartItems: decreaseItemCount(state.cartItems, Id),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;

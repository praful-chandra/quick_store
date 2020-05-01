import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEMS_FROM_CART,
  INCREASE_ITEM_COUNT,
  DECREASE_ITEM_COUNT,
} from "./action-Types";

export const addItemsToCart = (item) => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemsFromCart = (itemId) => ({
  type: REMOVE_ITEMS_FROM_CART,
  payload: itemId,
});

export const increaseItemCount = (itemId) => ({
  type: INCREASE_ITEM_COUNT,
  payload: itemId,
});

export const decreaseItemCount = (itemId) => ({
  type: DECREASE_ITEM_COUNT,
  payload: itemId,
});

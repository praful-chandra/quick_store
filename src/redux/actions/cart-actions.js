import {ADD_ITEM_TO_CART,REMOVE_ITEMS_FROM_CART} from "./action-Types";

export const addItemsToCart = item =>({
    type : ADD_ITEM_TO_CART,
    payload : item
})

export const removeItemsFromCart = itemId =>({
    type : REMOVE_ITEMS_FROM_CART,
    payload : itemId
})
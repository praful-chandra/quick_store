import {createSelector} from 'reselect';

const cart = state => state.cart;

export const getCartItems = createSelector(
    [cart],
    (cart)=>cart.cartItems
)
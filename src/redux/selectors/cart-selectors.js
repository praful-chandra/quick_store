import {createSelector} from 'reselect';

const cart = state => state.cart;

export const getCartItems = createSelector(
    [cart],
    (cart)=>cart.cartItems
)

export const getTotalCartAmount = createSelector(
    [cart],
    (cart)=>cart.cartItems.reduce((accumulator,currentVal)=>{
        return accumulator + currentVal.quantity * currentVal.price
    },0)
)
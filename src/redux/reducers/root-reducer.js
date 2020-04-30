import {combineReducers} from 'redux';

import UserReducer from "./user/user-reducer";
import CartReducer from "./cart-reducer";

export default combineReducers({

    user : UserReducer,
    cart : CartReducer

})
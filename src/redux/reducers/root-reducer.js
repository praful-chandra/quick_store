import {combineReducers} from 'redux';
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserReducer from "./user-reducer";
import CartReducer from "./cart-reducer";
import ItemsReducer from "./items-reducers";

const persistConfig = {
    key:'root',
    storage,
    whitelist :['cart']
}


const rootReducer =  combineReducers({

    user : UserReducer,
    cart : CartReducer,
    items : ItemsReducer

})

export default persistReducer(persistConfig,rootReducer);


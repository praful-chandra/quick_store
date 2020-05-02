import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import {persistStore} from "redux-persist";
import rootReducer from "./reducers/root-reducer";

const middlewares = [logger];


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const persistor = persistStore(store);

export  {store,persistor};

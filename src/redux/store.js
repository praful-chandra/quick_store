import { createStore, applyMiddleware,compose} from "redux";
// import logger from "redux-logger";

import rootReducer from "./reducers/root-reducer";

const middlewares = [];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
 
);

export default store;

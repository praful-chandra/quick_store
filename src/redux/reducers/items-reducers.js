import { FETCH_ITEMS } from "../actions/action-Types";

const INITIAL_STATE = {
  items: null,
};

const itemsReducer =(state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default itemsReducer;

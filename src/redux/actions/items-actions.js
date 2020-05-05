import { FETCH_ITEMS } from "./action-Types";
import Axios from "axios";

const fetchItems = (data) => {    
  return {
    type: FETCH_ITEMS,
    payload: data,
  };
};

export const fetchItemsAsync = () => async (dispatch) => {
  Axios.get("/api/shop/items").then((data) => {
    let items = data.data;
    dispatch(fetchItems(items));
  });
};

import {SET_CURRENT_USER} from "./action-Types";

export const setCurrentUser = user =>({
    type : SET_CURRENT_USER,
    payload : user,
})
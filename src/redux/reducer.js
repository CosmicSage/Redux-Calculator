import { combineReducers } from "redux";
import { CHANGE_MODE, CHANGE_DISPLAY, CHANGE_RESULT, CLEAR } from "./actions.js";

const changeMode = (state = {}, action) => {
  if (action.type === CHANGE_MODE) return action.payload;
  return state;
}

const displayReducer = (state = [], action) => {
  if (action.type === CHANGE_DISPLAY) return [...state, action.payload];
  if (action.type === CLEAR) return [action.payload]
  return state;
}

const changeResult = (state = {}, action) => {
  if (action.type === CHANGE_RESULT) return action.payload;
  return state;
}
export default combineReducers({
  RESULT : changeResult,
  DISPLAY : displayReducer,
  MODE : changeMode
});

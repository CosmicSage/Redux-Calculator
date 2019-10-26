import { createStore } from "redux";
import Reducer from "./reducer.js";
import { changeMode } from "./actions.js";
const store = createStore(Reducer);
store.dispatch(changeMode("DARK"))
export default store;
/** WHat the store should look like
store : {
  MODE : "LIGHT || DARK",
  DISPLAY : "Just a String of operations like: 2 + 3 - 1 * 10"
  TYPE : "SCIENTIFIC || NORMAL"
}
**/

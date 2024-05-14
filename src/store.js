import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/index";
const userInfoFromLocalStorage = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : null;
const intialState = {
  auth: {
    userData: userInfoFromLocalStorage,
  },
};
const store = createStore(reducers, intialState, composeWithDevTools());
export default store;

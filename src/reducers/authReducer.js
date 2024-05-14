import { LOGIN, LOGOUT } from "../constants";

const initialState = {
  userData: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        userData: action.payload,
      };
    case LOGOUT:
      return {
        userData: null,
      };
    default:
      return state;
  }
};

export default authReducer;

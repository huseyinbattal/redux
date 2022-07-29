import { SET_USERNAME } from "../actions/userActions";

const initialUserState = {
    userName: "emir",
  };
  
  function userReducer(state = initialUserState, action) {
    switch (action.type) {
      case SET_USERNAME:
        return { userName: action.payload };
  
      default:
        return state;
    }
  }

export default userReducer;
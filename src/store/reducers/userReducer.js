import { SET_USERNAME } from "../actions/userActions";
import { initialUserState } from "../state/userState";

  
  function userReducer(state = initialUserState, action) {
    switch (action.type) {
      case SET_USERNAME:
        return { userName: action.payload };
  
      default:
        return state;
    }
  }

export default userReducer;
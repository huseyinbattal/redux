import { FETCH_DATA ,SET_USERNAME} from "../actionTypes/userActionTypes";
import { initialUserState } from "../state/userState";

  
  function userReducer(state = initialUserState, action) {
    switch (action.type) {
      case SET_USERNAME:
        return { userName: action.payload };
      case FETCH_DATA:
        return {
          ...state,
          userData:action.payload,
        }
  
      default:
        return state;
    }
  }

export default userReducer;
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import countReducer from "./countReducer";

const reducer = combineReducers({
  count: countReducer,
  user: userReducer,
});

export default reducer;
// export default rootReducer;

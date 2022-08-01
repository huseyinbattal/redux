import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import countReducer from "./reducers/countReducer";

const reducer = combineReducers({
  count: countReducer,
  user: userReducer,
});

export default reducer;
// export default rootReducer;
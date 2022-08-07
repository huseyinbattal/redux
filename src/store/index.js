import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./reducers/userReducer";
import countReducer from "./reducers/countReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import {persistReducer,persistStore} from "redux-persist";

const reducer = combineReducers({
  count: countReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version:1,
  whitelist: ["count", "user"],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
export const persistor=persistStore(store)

export default reducer;
// export default rootReducer;

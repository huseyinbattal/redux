import { DECREMENT, INCREMENT } from "../actions/countActions";

const initialState = {
    count: 0,
  };
  
  
  
  function countReducer(state = initialState, action) {
    switch (action.type) {
      case INCREMENT:
        return { count: state.count + action.payload };
      case DECREMENT:
        return { count: state.count - action.payload };
  
      default:
        return state;
    }
  }

export default countReducer;
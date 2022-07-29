const initialState = {
  count: 0,
};

function rootReducer(state = initialState, action) {
  
switch (action.type) {
  case "INCREMENT":
    return {count:state.count+action.payload}

  default:
    break;
}

}

export default rootReducer;

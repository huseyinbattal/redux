import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT, incrementNumber } from "../store/actions/countActions";

function ContentBody(props) {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(incrementNumber(5));
        }}
      >
        Change Number
      </button>
      <br/>
     <h1> {userState.userName}</h1>
      <h1 onClick={props.onClick}>
        {" "}
        Bana gelen değer {props.userName}
      </h1>
    </div>
  );
}

export default ContentBody;

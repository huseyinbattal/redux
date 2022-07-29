import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ContentBody(props) {
  const count = useSelector((state) => state.count);
  const dispatch=useDispatch()

  return (
    <div>
      <button onClick={() => {
     
        dispatch({
          type:"INCREMENT",
          payload:5,
        })
      }}>Change Number</button>
      <h1 onClick={props.onClick}>
        {" "}
        Bana gelen değer {props.userName} {count}
      </h1>
    </div>
  );
}

export default ContentBody;

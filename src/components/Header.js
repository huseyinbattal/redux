import React, { useEffect } from "react";
import Content from "./Content";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../index";
import { DECREMENT } from "../store/actions/countActions";

function Header(props) {
  const countState = useSelector((state) => state.count);
  const dispatch = useDispatch();

  console.log(countState.count)

  useEffect(() => {
    const state = store.getState();
    console.log("state", state);
  }, [store.getState()]);

  useEffect(() => {
    store.subscribe(() => {
      console.log("değişti", store.getState());
    });
  }, []);

  return (
    <nav>
      <button
        onClick={() => {
          store.dispatch({
            type: DECREMENT,
            payload: 50,
          });
        }}
      >
        Test
      </button>
      <button
        onClick={() => {
          dispatch({
            type: DECREMENT,
            payload: 5,
          });
        }}
      >
        Decrease Number
      </button>
      <br/>
      Ben bir Header {countState.count}
      <br/>
      <Content onClick={props.onClick} userName={props.userName} />
    </nav>
  );
}

export default Header;

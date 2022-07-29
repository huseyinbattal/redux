import React, { useEffect } from "react";
import Content from "./Content";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../index";

function Header(props) {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

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
            type: "DECREMENT",
            payload: 50,
          });
        }}
      >
        Test
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "DECREMENT",
            payload: 5,
          });
        }}
      >
        Decrease Number
      </button>
      Ben bir Header {count}
      <Content onClick={props.onClick} userName={props.userName} />
    </nav>
  );
}

export default Header;

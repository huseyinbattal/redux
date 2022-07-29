import React from "react";
import { useSelector } from "react-redux";
import ContentBody from "./ContentBody";

function Content(props) {
  const count=useSelector((state)=>state.count)

  return (
      <div>
          Ben Header içerisinde Content {count}
          <ContentBody onClick={props.onClick} userName={ props.userName} />
      </div>
  );
}

export default Content;

import React from "react";
import ContentBody from "./ContentBody";

function Content(props) {
  return (
      <div>
          Ben Header içerisinde Content
          <ContentBody onClick={props.onClick} userName={ props.userName} />
      </div>
  );
}

export default Content;

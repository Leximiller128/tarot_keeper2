//import css
import "./pagecontent.css"
import React from "react";

function PageContent(props) {
  return (
    <div>
    {props.children}
    </div>
  );
}

export default PageContent;
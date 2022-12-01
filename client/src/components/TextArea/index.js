import "./textarea.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MDBTextArea, MDBInput } from "mdb-react-ui-kit";

function TextArea() {
  return (
    <BrowserRouter>
      <div>
        <MDBInput label="Text input" id="typeText" type="text" />
        <MDBInput label="Text input" id="typeText" type="text" />
        <MDBTextArea label="Message" id="textAreaExample" rows={4} />
      </div>
    </BrowserRouter>
  );
}

export default TextArea;

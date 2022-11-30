import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MDBTextArea, MDBInput } from "mdb-react-ui-kit";

export default function TextArea() {
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

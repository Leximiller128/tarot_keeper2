import React from "react";
import { MDBTextArea } from "mdb-react-ui-kit";

export default function App() {
  return (
    <div>
      <MDBInput label="Text input" id="typeText" type="text" />
      <MDBInput label="Text input" id="typeText" type="text" />
      <MDBTextArea label="Message" id="textAreaExample" rows={4} />
    </div>
  );
}

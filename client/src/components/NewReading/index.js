import "./newreading.css";

import React from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBInputGroup,
  MDBTextArea,
  MDBInput,
} from "mdb-react-ui-kit";

export default function NewReading() {
  return (
    <MDBContainer>
      <MDBContainer fluid>
        <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
          <input
            className="form-control"
            placeholder="Type query"
            aria-label="Search"
            type="Search"
          />
          <MDBBtn outline>Search</MDBBtn>
        </MDBInputGroup>
      </MDBContainer>
      <MDBInput label="Title for New Reading" id="typeText" type="text" />
      <MDBInput label="Inital Question Asked" id="typeText" type="text" />
      <MDBTextArea label="Notes" id="textAreaExample" rows={4} />
      <MDBBtn>Submit</MDBBtn>
    </MDBContainer>
  );
}

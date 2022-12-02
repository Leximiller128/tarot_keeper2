import "./login.css";
import React from "react";

import {
  MDBContainer,
  MDBBtn,
  MDBInputGroup,
  // MDBTextArea,
  // MDBInput,
  // MDBCard,
  // MDBCardText,
  // MDBCardTitle,
  // MDBCardBody,
  // MDBCardImage,
} from "mdb-react-ui-kit";

function Login() {
  return (
    <MDBContainer>
      <MDBInputGroup className="mb-3" textBefore="Username">
        <textarea className="form-control" />
      </MDBInputGroup>
      <MDBInputGroup className="mb-3" textBefore="Password">
        <textarea className="form-control" />
      </MDBInputGroup>
      <MDBBtn className="btn2">Login</MDBBtn>
    </MDBContainer>
  );
}

export default Login;

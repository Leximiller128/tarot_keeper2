import React, { useState } from "react";
import "./signupform.css";
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

import { checkPassword, validateEmail } from "../../utils/helpers";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else if (inputType === "password") {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or username is invalid");

      return;
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }

    setUserName("");
    setPassword("");
    setEmail("");
    alert(`Hello ${userName}`);
  };

  return (
    // <MDBContainer>
    //   <MDBInputGroup className="mb-3" textBefore="Email">
    //     <textarea className="form-control" />
    //   </MDBInputGroup>

    //   <MDBInputGroup className="mb-3" textBefore="Username">
    //     <textarea className="form-control" />
    //   </MDBInputGroup>
    //   <MDBInputGroup className="mb-3" textBefore="Password">
    //     <textarea className="form-control" />
    //   </MDBInputGroup>
    //   <MDBBtn>Create New User</MDBBtn>
    //   {errorMessage && (
    //     <div>
    //       <p className="error-text">{errorMessage}</p>
    //     </div>
    //   )}
    // </MDBContainer>
    <form onSubmit={handleFormSubmit}>
    <input
      className="form-input"
      placeholder="Your username"
      name="userName"
      type="text"
      value={userName}
      onChange={handleInputChange}
    />
    <input
      className="form-input"
      placeholder="Your email"
      name="email"
      type="email"
      value={email}
      onChange={handleInputChange}
    />
    <input
      className="form-input"
      placeholder="******"
      name="password"
      type="password"
      value={password}
      onChange={handleInputChange}
    />
    <button
      className="btn btn-block btn-primary"
      style={{ cursor: 'pointer' }}
      type="submit"
    >
      Submit
    </button>
  </form>
  );
}

export default SignupForm;

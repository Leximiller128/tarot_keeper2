import React, { useState } from "react";
import "./signupform.css";
import { CREATE_USER } from "../../graphql/mutations/createUser";
import Auth from "../../utils/auth";
import login from "../Login";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [addUser, { error, data }] = useMutation(CREATE_USER);
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "username") {
      setUserName(inputValue);
    } else if (inputType === "password") {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // if (!validateEmail(email) || !userName) {
    //   setErrorMessage("Email or username is invalid");

    //   return;
    // }
    // if (!checkPassword(password)) {
    //   setErrorMessage(
    //     `Choose a more secure password for the account: ${userName}`
    //   );
    //   return;
    // }

    console.log({ username, email, password });
    try {
      const { data } = await addUser({
        variables: { username, email, password },
      });
      Auth.login(data.addUser.token);
    } catch (error) {
      console.log(error);
    }
    alert(`Hello ${username}`);
    setUserName("");
    setPassword("");
    setEmail("");
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
        name="username"
        type="text"
        value={username}
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
        style={{ cursor: "pointer" }}
        type="submit"
      >
        Submit
      </button>
      <Link
        to="/login"
        className="btn btn-block btn-primary"
        id="signupBtn"
        style={{ cursor: "pointer" }}
        type="submit"
        onClick={login}
      >
        Already a user, sign in here!
      </Link>
    </form>
  );
}

export default SignupForm;

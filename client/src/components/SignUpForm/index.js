import React, { useState } from "react";
import "./signupform.css";
import { CREATE_USER } from "../../graphql/mutations/createUser";
import Auth from "../../utils/auth";
// import {validateEmail, checkPassword} from "../../utils/helpers"
import login from "../Login";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";

function SignupForm() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  // const [errorMessage, setErrorMessage] = useState("");
  const [addUser, {error, data}] = useMutation(CREATE_USER);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("we are here after event.prevent")

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log("try")
      Auth.login(data.addUser.token);
      
      alert(`Hello ${formState.username}`);
     
    } catch (error) {
      console.log("catch")
      console.log(error);
    }
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
        value={formState.username}
        onChange={handleInputChange}
      />
      <input
        className="form-input"
        placeholder="Your email"
        name="email"
        type="email"
        value={formState.email}
        onChange={handleInputChange}
      />
      <input
        className="form-input"
        placeholder="******"
        name="password"
        type="password"
        value={formState.password}
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

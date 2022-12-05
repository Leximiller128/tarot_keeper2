import "./login.css";
import React, { useState } from "react";
import { LOGIN } from "../../graphql/mutations/login";
import Auth from "../../utils/auth";
import signupForm from "../SignUpForm";
import { Link } from "react-router-dom";
import newReading from "../NewReading";

import { checkPassword, validateEmail } from "../../utils/helpers";
import { useMutation } from "@apollo/client";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [login, { error, data }] = useMutation(LOGIN);
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "password") {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log({ email, password });

    try {
      const { data } = await login({
        variables: { email, password },
      });
      Auth.login(data.login.token);
    } catch (error) {
      console.log(error);
    }
    alert(`Hello ${email}`);
    setPassword("");
    setEmail("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
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
      <Link
        to="/newReading"
        className="btn btn-block btn-primary"
        id="signupBtn"
        style={{ cursor: "pointer" }}
        type="submit"
        onClick={newReading}
      >
        Sign In!
      </Link>

      <Link
        to="/signupForm"
        className="btn btn-block btn-primary"
        id="signupBtn"
        style={{ cursor: "pointer" }}
        type="submit"
        onClick={signupForm}
      >
        Not a user? Signup here!
      </Link>
    </form>
  );
}

export default Login;

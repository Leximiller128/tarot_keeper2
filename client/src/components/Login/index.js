import "./login.css";
import React, { useState } from "react";
import { LOGIN } from "../../graphql/mutations/login";
import Auth from "../../utils/auth";
import signupForm from "../SignUpForm";
import { Link } from "react-router-dom";
// import newReading from "../NewReading";

// import { checkPassword, validateEmail } from "../../utils/helpers";
import { useMutation } from "@apollo/client";

function Login() {

  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [login, { error }] = useMutation(LOGIN);
  const [validated] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserFormData({
      ...userFormData,
      [name]: value,
    });

    console.log( "state is being chnaged")
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("hello")
    // console.log({ email, password });
    // console.log({data})

    try {
      // console.log({data})
      const { data } = await login({
        variables: { ...userFormData },
      });
      Auth.login(data.login);

      


      window.location.assign(`/newReading`);

    } catch (error) {
      console.error(error);
      setErrorMessage(true)
    }
    alert(`Hello ${userFormData.email}`);


    setUserFormData({
      email: '',
      password: '',
    });

  };

  return (
    <form onSubmit={handleFormSubmit}
    validated={validated}>
      <input
        className="form-input"
        placeholder="Your email"
        name="email"
        type="email"
        value={userFormData.email}
        onChange={handleInputChange}
      />
      <input
        className="form-input"
        placeholder="******"
        name="password"
        type="password"
        value={userFormData.password}
        onChange={handleInputChange}
      />
      <button
        // to="/newReading"
        className="btn btn-block btn-primary"
        id="signupBtn"
        style={{ cursor: "pointer" }}
        type="submit"
        // onClick={newReading}
      >
        Sign In!
      </button>

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

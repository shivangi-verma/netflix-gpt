import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute bg-gradient-to-b from-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix-background"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[24vw] absolute p-12 bg-black bg-opacity-75 my-36 mx-auto right-0 left-0 text-white rounded-md"
      >
        <h1 className="font-bold text-3xl pb-6 ">
          {isSignInForm ? "Log In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-[#333333] rounded-md placeholder-[#949494]"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-[#333333] rounded-md placeholder-[#949494]"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-[#333333] rounded-md mb-10 placeholder-[#949494]"
        />
        <p className="text-red-500  font-bold p-2">{errorMessage}</p>
        <button
          className="p-4 my-2 bg-[#e50914] w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Log In" : "Sign Up"}
        </button>

        <p onClick={toggleSignInForm} className="p-4">
          {isSignInForm
            ? `New to Netflix? Sign up now`
            : "Already have an account? Log in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

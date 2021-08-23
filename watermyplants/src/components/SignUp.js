import React from "react";
import { useState } from "react";
import useForm from "../hooks/useForm";

const initialSignUp = {
  username: "",
  phoneNumber: "",
  password: "",
};

function SignUp(props) {
  const [signUpData, handleChange] = useForm(initialSignUp);

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios post Here
    //set token to localstorage
    //push to my plant list
  };
  console.log(signUpData);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input 
            onChange={handleChange} 
            value={signUpData.username}
            type="text" 
            name="username"
          />
        </label>
        <label>
          Phone Number:
          <input 
            onChange={handleChange} 
            value={signUpData.phoneNumber}
            type="tel" 
            name="phoneNumber"
          />
        </label>
        <label>
          Password:
          <input
            onChange={handleChange}
            value={signUpData.password}
            type="password"
            name="password"
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;

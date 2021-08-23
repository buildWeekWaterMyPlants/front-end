import React from "react";
import { useState } from "react";

const initialSignUp = {
  username: "",
  phoneNumber: "",
  password: "",
};

function SignUp(props) {
  const [signUpData, setSignUpData] = useState(initialSignUp);

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios post Here
    //set token to localstorage
    //push to my plant list
  };
  console.log(signUpData);
  return (
    <div>
      <form>
        <label>
          Username:
          <input onChange={handleChange} type="text" name="username"></input>
        </label>
        <label>
          Phone Number:
          <input onChange={handleChange} type="tel" name="phoneNumber"></input>
        </label>
        <label>
          Password:
          <input
            onChange={handleChange}
            type="password"
            name="password"
          ></input>
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;

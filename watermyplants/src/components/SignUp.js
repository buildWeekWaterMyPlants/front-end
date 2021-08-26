import React from "react";
import useForm from "../hooks/useForm";
import { connect } from "react-redux";
import { signUp } from "../actions";
import { useHistory } from "react-router-dom";

const initialSignUp = {
  username: "",
  phoneNumber: "",
  password: "",
};

export function SignUp(props) {
  const { signUp } = props;
  const { push } = useHistory();
  const [signUpData, handleChange] = useForm(initialSignUp);

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios post Here
    signUp(signUpData)
    //set token to localstorage
    push("/plantlist")
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

export default connect(null, { signUp })(SignUp);

import React from "react";
import useForm from "../hooks/useForm";
import { connect } from "react-redux";
import { signUp } from "../actions";
import { useHistory } from "react-router-dom";

import useValidation from "../hooks/useValidation";
import formSchema from "../schema/formSchema";

const initialSignUp = {
  username: "",
  phoneNumber: "",
  password: "",
};

export function SignUp(props) {
  const { signUp } = props;
  const { push } = useHistory();
  const [signUpData, handleChange] = useForm(initialSignUp);
  const [disabled, formErrors, changeAndValidate] = useValidation(signUpData, formSchema, handleChange);
  


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
       onChange={changeAndValidate}
            value={signUpData.username}
            type="text" 
            name="username"
          />
        </label>
        <label>
          Phone Number:
          <input 
         onChange={changeAndValidate}
            value={signUpData.phoneNumber}
            type="tel" 
            name="phoneNumber"
          />
        </label>
        <label>
          Password:
          <input
          onChange={changeAndValidate}
            value={signUpData.password}
            type="password"
            name="password"
          />
        </label>
        <button disabled={disabled} type="submit">Sign Up</button>
        {
              Object.keys(formErrors).map((err, index) =>
                <div key={index} className="text-red-500">{formErrors[err]}</div>
              )
            }
      </form>
    </div>
  );
}

export default connect(null, { signUp })(SignUp);

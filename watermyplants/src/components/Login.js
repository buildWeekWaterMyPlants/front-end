import React from "react";
import useForm from "../hooks/useForm";
import { connect } from "react-redux";
import { login } from "../actions";
import { useHistory } from "react-router-dom";
import useValidation from "../hooks/useValidation";
import formSchema from "../schema/formSchema";

const initialLogin = {
  username: "",
  password: "",
};

export function Login(props) {
  const { login } = props;
  const [loginData, handleChange] = useForm(initialLogin);
  const { push } = useHistory();
  const [disabled, formErrors, changeAndValidate] = useValidation(loginData, formSchema, handleChange);

  const handleSubmit = (e) => {
    e.preventDefault();
    //   axios post
    login(loginData)
    push("/plantlist")
    // set token to localstorage
    //push to plantlist
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
             onChange={changeAndValidate}
            type="text"
            name="username"
            value={loginData.username}
          ></input>
        </label>
        <label>
          Password:
          <input
        onChange={changeAndValidate}
            type="password"
            name="password"
            value={loginData.password}
          ></input>
        </label>
        <button disabled={disabled} type="submit">Login</button>
        {
              Object.keys(formErrors).map((err, index) =>
                <div key={index} className="text-red-500">{formErrors[err]}</div>
              )
            }
      </form>
    </div>
  );
}

export default connect(null, { login })(Login);

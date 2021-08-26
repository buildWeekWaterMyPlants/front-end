import React from "react";
import useForm from "../hooks/useForm";
import { connect } from "react-redux";
import { login } from "../actions";
import { useHistory } from "react-router-dom";
import useValidation from "../hooks/useValidation";
import loginSchema from "../schema/loginSchema";
import ErrorMessage from "./ErrorMessage";

const initialLogin = {
  username: "",
  password: "",
};

export function Login(props) {
  const { login } = props;
  const [loginData, handleChange] = useForm(initialLogin);
  const { push } = useHistory();
  const [disabled, formErrors, changeAndValidate] = useValidation(loginData, loginSchema, handleChange);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginData)
    push("/plantlist")
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
        <ErrorMessage formErrors={formErrors}/>
      </form>
    </div>
  );
}

export default connect(null, { login })(Login);

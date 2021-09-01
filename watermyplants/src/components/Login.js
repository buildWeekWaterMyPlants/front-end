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
      <form className=" p-8 flex flex-col border-8" onSubmit={handleSubmit}>
        <label className=" text-lg font-bold flex flex-col items-center justify-center">
          Username:
          <input
            className="border-4"
            onChange={changeAndValidate}
            type="text"
            name="username"
            value={loginData.username}
          />
        </label>
        <label className=" text-lg font-bold  flex flex-col items-center justify-center">
          Password:
          <input
            className="border-4"
            onChange={changeAndValidate}
            type="password"
            name="password"
            value={loginData.password}
          />
        </label>
        <button disabled={disabled} type="submit">Login</button>
        <ErrorMessage formErrors={formErrors}/>
      </form>
    </div>
  );
}

export default connect(null, { login })(Login);

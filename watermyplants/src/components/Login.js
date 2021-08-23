import React from "react";
import { useForm } from "../hooks/useForm";

const initialLogin = {
  username: "",
  password: "",
};

function Login(props) {
  const [loginData, handleChange] = useForm(initialLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    //   axios post
    // set token to localstorage
    //push to plantlist
  };

  return (
    <div>
      <form>
        <label>
          Username:<input type="text"></input>
        </label>
        <label>
          Password:<input type="password"></input>
        </label>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;

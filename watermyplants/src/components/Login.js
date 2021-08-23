import React from "react";
import useForm from "../hooks/useForm";

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
          Username:
          <input
            onChange={handleChange}
            type="text"
            name="username"
            value={loginData.username}
          ></input>
        </label>
        <label>
          Password:
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={loginData.password}
          ></input>
        </label>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;

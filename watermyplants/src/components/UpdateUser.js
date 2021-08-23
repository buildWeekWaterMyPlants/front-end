import axios from "axios";
import React from "react";
import useForm from "../hooks/useForm";

const initialData = { phonenumber: "" };

function UpdateUser(props) {
  const [userPhone, handleChange] = useForm(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios put
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          New Phone Number:
          <input
            onChange={handleChange}
            type="tel"
            name="phoneNumber"
            value={userPhone.phonenumber}
          ></input>
        </label>
        <button>Update</button>
      </form>
    </div>
  );
}

export default UpdateUser;

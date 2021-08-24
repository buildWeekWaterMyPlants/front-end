import axios from "axios";
import React from "react";
import useForm from "../hooks/useForm";
import { connect } from "react-redux";
import { updateUser } from "../actions";

const initialData = { phonenumber: "" };

function UpdateUser(props) {
  const [userPhone, handleChange] = useForm(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios put
    updateUser(userPhone);
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

export default connect(null, { updateUser })(UpdateUser);

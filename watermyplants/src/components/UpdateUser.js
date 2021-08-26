
import React from "react";
import useForm from "../hooks/useForm";
import { connect } from "react-redux";
import { updateUser } from "../actions";
import updateUserSchema from "../schema/updateUserSchema";
import useValidation from "../hooks/useValidation";
import ErrorMessage from "./ErrorMessage";

const initialData = { phonenumber: "" };

function UpdateUser(props) {
  const [userPhone, handleChange] = useForm(initialData);
  const [disabled, formErrors, changeAndValidate] = useValidation(userPhone, updateUserSchema, handleChange)

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(userPhone);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          New Phone Number:
          <input
            onChange={changeAndValidate}
            type="tel"
            name="phonenumber"
            value={userPhone.phonenumber}
          ></input>
        </label>
        <ErrorMessage formErrors={formErrors}/>
        <button disabled={disabled} type="submit">Update</button>
      </form>
    </div>
  );
}

export default connect(null, { updateUser })(UpdateUser);

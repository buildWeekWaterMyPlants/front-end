import React from "react";
import useForm from "../hooks/useForm";
import useValidation from "../hooks/useValidation";
import formSchema from "../schema/formSchema";
import { connect } from "react-redux";
import { addPlant } from "../actions";


const initalFormValues = {
  id: "",
  nickname: "",
  species: "",
  h2oFrequency: "",
};

function AddPlant(props) {

  const { addPlant } = props;
  const [formValues, handleChange] = useForm(initalFormValues)
  const [disabled, formErrors, changeAndValidate] = useValidation(formValues, formSchema, handleChange);
  
  

  return (
    <>
    <div>
      <label>
      ▼
        <form className=" p-8 flex flex-col border-8">
          <label className=" text-lg font-bold flex flex-col items-center justify-center">
            What is your plant's nickname?
            <input 
              className="border-4" 
              name="nickname" 
              type="text" 
              placeholder="Add Nickname" 
              value={formValues.nickname} 
              onChange={changeAndValidate}  />
          </label>
          <label className=" text-lg font-bold  flex flex-col items-center justify-center">
            What species is the plant?
            <input className="border-4" type="text" placeholder="Add Species" name="species" value={formValues.species} 
              onChange={changeAndValidate} />
            <label className=" text-lg font-bold flex flex-col items-center justify-center">
              How often do you give it water?
              <select className="border-4" name="h2oFrequency" value={formValues.h2oFrequency} 
                onChange={changeAndValidate}>
                <option value=''>--Select an Option--</option>
                <option value="1">Everyday</option>
                <option value="3">Every three days</option>
                <option value="5">Every five days</option>
                <option value="7">Once a week</option>
              </select>
              <button disabled={disabled} className="border m-4 p-2 text-md bg-yellow-200 hover:bg-yellow-300 rounded-md">Submit</button>
              <div className="text-red-500">{formErrors.nickname}</div>
              <div className="text-red-500">{formErrors.species}</div>
              <div className="text-red-500">{formErrors.h2oFrequency}</div>
            </label>
          </label>
        </form>
      </label>
    </div>
    </>
  )
}

export default connect(null, { addPlant })(AddPlant);

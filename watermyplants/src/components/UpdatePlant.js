import React, { useState } from "react";
import { connect } from "react-redux";
import { updatePlant } from "../actions";
import { useParams } from 'react-router-dom';
import useForm from "../hooks/useForm";
import useValidation from "../hooks/useValidation";
import formSchema from "../schema/formSchema";

function UpdatePlant(props) {
  const { updatePlant } = props;
  const { id } = useParams;
  const [ plantToUpdate, setPlantToUpdate ] = useState(null);

  const [formValues, handleChange] = useForm(plantToUpdate);
  const [disabled, formErrors, changeAndValidate] = useValidation(formValues, formSchema, handleChange);

  // useEffect(() => {
  //   axios.get(`http://localhost:...../${id}`)
  //     .then(setPlantToUpdate(res.data))
  //     .catch(err => console.log(err))
  // }, [id])

  const submit = (e) => {
    e.preventDefault()
    updatePlant(formValues)
  }

  return (
    <section>
    ▼
      <form className=" p-8 flex flex-col border-8" onSubmit={submit}>
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
            <button disabled={disabled} className="border m-4 p-2 text-md bg-yellow-200 hover:bg-yellow-300 rounded-md">Save change</button>
            {
              Object.keys(formErrors).map((err, index) =>
                <div key={index} className="text-red-500">{formErrors[err]}</div>
              )
            }
          </label>
        </label>
      </form>
  </section>
  );
}

export default connect(null, { updatePlant })(UpdatePlant);

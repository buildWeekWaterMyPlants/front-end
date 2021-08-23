import React from "react";

function AddPlant(props) {

  const {formValues, changeForm, submit} = props;

  const onChange=(evt)=>{
    const {name, value} = evt.target;
    changeForm(name,value)
  }

  const onSubmit=(evt)=>{
    evt.preventDefault();
    submit();
  }
  

  return (
    <>
    <div>
      <label>
      ▼
        <form className=" p-8 flex flex-col border-8" onSubmit={onSubmit}>
          <label className=" text-lg font-bold flex flex-col items-center justify-center">
            What is your plant's nickname?
            <input className="border-4" name="nickname" type="text" placeholder="Add Nickname" value={formValues.nickname} onChange={onChange}  />
          </label>
          <label className=" text-lg font-bold  flex flex-col items-center justify-center">
            What species is the plant?
            <input className="border-4" type="text" placeholder="Add Species" name="species" value={formValues.species} onChange={onChange} />
            <label className=" text-lg font-bold flex flex-col items-center justify-center">
              How often do you give it water?
              <select className="border-4" name="h2oFrequency" value={formValues.h2oFrequency} onChange={onChange}>
                <option value=''>--Select an Option--</option>
                <option value="1">Everyday</option>
                <option value="3">Every three days</option>
                <option value="5">Every five days</option>
                <option value="7">Once a week</option>
              </select>
              <button className="border m-4 p-2 text-md bg-yellow-200 hover:bg-yellow-300 rounded-md">Submit</button>
            </label>
          </label>
        </form>
      </label>
    </div>
    </>
  )
}

export default AddPlant;

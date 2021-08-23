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
        Add A Plant:
        <form className="flex" onSubmit={onSubmit}>
          <label>
            What is your plant's nickname?
            <input name="nickname" type="text" placeholder="Add Nickname" value={formValues.nickname} onChange={onChange}  />
          </label>
          <label>
            What species is the plant?
            <input type="text" placeholder="Add Species" name="species" value={formValues.species} onChange={onChange} />
            <label>
              How often do you give it water?
              <select name="h2oFrequency" value={formValues.h2oFrequency} onChange={onChange}>
                <option value="null">--Select an Option--</option>
                <option value="1">Everyday</option>
                <option value="3">Every three days</option>
                <option value="5">Every five days</option>
                <option value="7">Once a week</option>
              </select>
              <button>Submit</button>
            </label>
          </label>
        </form>
      </label>
    </div>
    </>
  )
}

export default AddPlant;

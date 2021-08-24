import React, { useState, useEffect } from "react";
import Plant from "./Plant";
import { Link, Route } from "react-router-dom";
import AddPlant from "./AddPlant";
import schema from "../schema/formSchema";
import { connect } from "react-redux";
import { getPlants } from "../actions";
import * as yup from "yup";

const dummyData = [
  {
    id: "1",
    nickname: "Dan",
    species: "Sunflower",
    h2oFrequency: "7",
  },
  { id: "2", nickname: "Steve", species: "Daisy", h2oFrequency: "1" },
  {
    id: "3",
    nickname: "Roger",
    species: "Rose",
    h2oFrequency: "3",
  },
];

const initalFormValues = {
  id: "",
  nickname: "",
  species: "",
  h2oFrequency: "",
};

const initalFormErrors = {
  id: "",
  nickname: "",
  species: "",
  h2oFrequency: "",
};

const initalDisabled = true;

function PlantList(props) {
  const { getPlants, plants } = props; 

  useEffect(() => {
    getPlants()
  }, [])

  const [plants, setPlants] = useState(dummyData);
  const [formValues, setFormValues] = useState(initalFormValues);
  const [formErrors, setFormErrors] = useState(initalFormErrors);
  const [disabled, setDisabled] = useState(initalDisabled);
  const [open, setOpen] = useState(false);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const changeForm = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = () => {
    let randomNumber = Math.random();
    const newPlant = {
      id: `${randomNumber}`,
      nickname: formValues.nickname,
      species: formValues.species,
      h2oFrequency: formValues.h2oFrequency,
    };
    //API goes here
    setPlants([...plants, newPlant]);
    console.log(newPlant);
    setFormValues(initalFormValues);
  };

  const deleteFunction = (id) => {
    let newArr = plants.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setPlants(newArr);
  };

  const editFunction = (id, nick, spec, h2o) => {
    console.log("nicknaem", nick);
    setFormValues({ nickname: nick, species: spec, h2oFrequency: h2o, id: id });

    deleteFunction(id);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="flex w-90 justify-center flex-col text-center items-center mt-10">
      <h2 className="text-5xl font-bold m-4"> Your Garden </h2>
      <button onClick={e=>setOpen(!open)} className="border p-2 text-md bg-yellow-200 hover:bg-yellow-300 rounded-md">
        Add A Plant
      </button>
      {open && 
        <AddPlant
          formErrors={formErrors}
          disabled={disabled}
          submit={submit}
          changeForm={changeForm}
          formValues={formValues}
        />
      }
      
      <div className="w-11/12 mt-6 h-full border-8 flex-wrap flex justify-center items-start">
        {plants.map((plant, index) => {
          return (
            <Plant
              id={plant.id}
              editFunction={editFunction}
              nickname={plant.nickname}
              species={plant.species}
              h2oFrequency={plant.h2oFrequency}
            />
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  plants: state.plants
})

export default connect(mapStateToProps, { getPlants })(PlantList);

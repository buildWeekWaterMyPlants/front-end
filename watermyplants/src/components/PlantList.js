import React, { useState } from "react";
import Plant from './Plant'
import { Link, Route } from "react-router-dom";
import AddPlant from "./AddPlant";

const dummyData = [
  {
    id: 1,
    nickname: 'Dan',
    species: 'Sunflower',
    h2oFrequency: '4'
  
  },
  { id: 2,
    nickname: 'Steve',
    species: 'Daisy',
    h2oFrequency: '4'
  },
  {
    id: 3,
    nickname: 'Roger',
    species: 'Rose',
    h2oFrequency: '4'
  }

]

const initalFormValues= {
  id: '',
  nickname: '',
  species: '',
  h2oFrequency: ''
}

function PlantList(props) {
  const [plants, setPlants] = useState(dummyData);
  const [formValues, setFormValues] = useState(initalFormValues);

  const changeForm=(name,value)=>{
    setFormValues({...formValues, [name]:value})
  }

  const submit = () =>{
    const newPlant={
      id: '',
      nickname: formValues.nickname,
      species: formValues.species,
      h2oFrequency: formValues.h2oFrequency
    }
    //API goes here
    setPlants([...plants, newPlant])
    console.log(newPlant)
  }

  return (
  <div className="flex w-90 border-8 justify-center flex-col text-center items-center"> 
      <h2 className="text-4xl"> Your Garden </h2>
      <Link to="/add-plant" className="border p-2 text-md bg-green-200">Add A Plant</Link>
      <Route  path="/add-plant">
        <AddPlant submit={submit} changeForm={changeForm} formValues={formValues} />
      </Route>
      <div className="w-full mt-6 h-80 border flex-wrap flex justify-center items-start">
       {plants.map(plant=>{
        return <Plant id={plant.id} nickname={plant.nickname} species={plant.species} h2oFrequency={plant.h2oFrequency} />
        })}
      </div>
  </div>
  )
}

export default PlantList;

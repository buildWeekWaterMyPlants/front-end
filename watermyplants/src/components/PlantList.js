import React, { useState } from "react";
import Plant from './Plant'
import { Link, Route } from "react-router-dom";
import AddPlant from "./AddPlant";

const dummyData = [
  {
    id: '1',
    nickname: 'Dan',
    species: 'Sunflower',
    h2oFrequency: '7'
  
  },
  { id: '2',
    nickname: 'Steve',
    species: 'Daisy',
    h2oFrequency: '1'
  },
  {
    id: '3',
    nickname: 'Roger',
    species: 'Rose',
    h2oFrequency: '3'
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
    let randomNumber = Math.random();
    const newPlant={
      id: `${randomNumber}`,
      nickname: formValues.nickname,
      species: formValues.species,
      h2oFrequency: formValues.h2oFrequency
    }
    //API goes here
    setPlants([...plants, newPlant])
    console.log(newPlant)
    setFormValues(initalFormValues)
  }

  const deleteFunction = (id) =>{
    console.log('It works!')
    let newArr = plants.filter(item=>{
      if(item.id !== id){
        return item;
      }
    })
    setPlants(newArr)
  }

  const editFunction = (id, nick, spec, h2o) =>{
    console.log("nicknaem", nick)
    setFormValues({nickname: nick, species: spec, h2oFrequency: h2o, id: id })
    
    deleteFunction(id);
  }

  return (
  <div className="flex w-90 justify-center flex-col text-center items-center mt-10"> 
      <h2 className="text-5xl font-bold m-4"> Your Garden </h2>
      <Link to="/add-plant" className="border p-2 text-md bg-yellow-200 hover:bg-yellow-300 rounded-md">Add A Plant</Link>
      <Route  path="/add-plant">
        <AddPlant submit={submit} changeForm={changeForm} formValues={formValues} />
      </Route>
      <div className="w-11/12 mt-6 h-80 border-8 flex-wrap flex justify-center items-start">
       {plants.map((plant, index)=>{
        return <Plant id={plant.id} editFunction={editFunction} deleteFunction={deleteFunction} nickname={plant.nickname} species={plant.species} h2oFrequency={plant.h2oFrequency} />
        })}
      </div>
  </div>
  )
}

export default PlantList;

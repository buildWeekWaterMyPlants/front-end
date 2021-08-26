import React, { useState } from "react";
import { connect } from "react-redux";
import { deletePlant } from "../actions";
import { Link, useRouteMatch } from 'react-router-dom';

function Plant(props) {

  const {id, nickname, species, h2oFrequency, deletePlant, setPlantToEdit} = props;
  const { url } = useRouteMatch();

  const [time, setTime] = useState(h2oFrequency*86400)

  const timerReset = ()=>{
    clearTimeout(timer)
    setTime(h2oFrequency*86400)
  }

    function countdown(){

      setTime(time - 1)

    }

    let timer = setTimeout(countdown, 1000)

  const handleDelete = () => deletePlant(id)

  return (
    <div className="border rounded-lg flex w-1/4 m-4 shadow-lg  bg-green-300">
      <div className="flex flex-col p-6">
      <h3 className="text-2xl text-left font-bold">{nickname}</h3>
      <h6 className="text-lg text-left italic">Species: {species}</h6>
      <h6 className="text-sm text-left">Water Frequency: {h2oFrequency} days</h6>
      <h6 className="text-sm text-left animate-pulse">  Time until water: {time}
         {/* {days} days, {hours} hours, {minutes} minutues, {seconds} seconds.  */}
          </h6>
          <button onClick={e=>timerReset()} className="border ml-16 text-md bg-blue-200 hover:bg-blue-300 mt-4 p-2 rounded-md w-2/3">Water Plant</button>
      </div>
        <div onClick={handleDelete} className="cursor-pointer p-2"> ❌</div>
        <Link to={`${url}/update/${id}`} className="cursor-pointer p-2">✏️</Link>
        {/* <button className='edit-btn' onClick={getPlant(id)}>✏️</button> */}
    </div>
  )
}

export default connect(null, { deletePlant })(Plant);

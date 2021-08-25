import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deletePlant } from "../actions";
import { Link } from "react-router-dom";

const millisecondsPerDay = 86400000;
const millisecondsPerHour = (1000 * 60 * 60);
const millisecondsPerMinute = (1000 * 60);

function Plant(props) {

  const {id, nickname, species, h2oFrequency, deletePlant, editFunction, lastWaterTime = new Date("Jun 5, 2021 16:37:52").getTime()} = props;

  // Date.now() - lastWaterTime = time in milliseconds since we last watered
  const [timeLeft, setTimeLeft] = useState((millisecondsPerDay * h2oFrequency) - Date.now() - lastWaterTime);
  const [daysLeft, setDaysLeft] = useState(Math.floor(timeLeft / millisecondsPerDay));
  const [hoursLeft, setHoursLeft] = useState(Math.floor((timeLeft % millisecondsPerDay) / millisecondsPerHour));
  const [minutesLeft, setMinutesLeft] = useState(Math.floor((timeLeft % millisecondsPerHour) / millisecondsPerMinute))
  const [secondsLeft, setSecondsLeft] = useState(Math.floor((timeLeft % millisecondsPerMinute) / 1000))
  const [secondsPassed, setSecondsPassed] = useState(0);
  
  useEffect(() => {
    setInterval(() => {
      setSecondsPassed(prevSeconds => prevSeconds + 1)
    }, 1000)
  }, [])

  useEffect(() => {
    setTimeLeft((millisecondsPerDay * h2oFrequency) - Date.now() - lastWaterTime - (secondsPassed * 1000))
    setDaysLeft(Math.floor(timeLeft / millisecondsPerDay));
    setHoursLeft(Math.floor((timeLeft % millisecondsPerDay) / millisecondsPerHour));
    setMinutesLeft(Math.floor((timeLeft % millisecondsPerHour) / millisecondsPerMinute));
    setSecondsLeft(Math.floor((timeLeft % millisecondsPerMinute) / 1000))
  }, [secondsPassed])
  
  const timerReset = () => {};
    
  const handleDelete = () => deletePlant(id)
   
  return (
    <div className="border rounded-lg flex w-1/4 m-4 shadow-lg  bg-green-300">
      <div className="flex flex-col p-6">
      <h3 className="text-2xl text-left font-bold">{nickname}</h3>
      <h6 className="text-lg text-left italic">{species}</h6>
      <h6 className="text-sm text-left">Water Frequency: {h2oFrequency} days</h6>
      <h6 className="text-sm text-left animate-pulse">
         {daysLeft} days, {hoursLeft} hours, {minutesLeft} minutues, {secondsLeft} seconds. 
          </h6>
          <button onClick={e=>timerReset()} className="border ml-16 text-md bg-blue-200 hover:bg-blue-300 mt-4 p-2 rounded-md w-2/3">Water Plant</button>
      </div>
        <div onClick={handleDelete} className="cursor-pointer p-2"> ❌</div>
        <Link to={`/plantlist/update/${id}`} className="cursor-pointer p-2">✏️</Link>
    </div>
  )
}

export default connect(null, { deletePlant })(Plant);

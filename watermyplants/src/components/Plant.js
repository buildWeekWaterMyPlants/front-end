import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deletePlant } from "../actions";
import { Link } from "react-router-dom";

const msPerDay = 1000 * 60 * 60 * 24;
const msPerHour = 1000 * 60 * 60;
const msPerMinute = 1000 * 60;

function Plant(props) {

  const {id, nickname, species, h2oFrequency, deletePlant, editFunction, lastWaterTime = new Date("Jun 5, 2021 16:37:52").getTime()} = props;

  // Date.now() - lastWaterTime = time in ms since we last watered
  const [timeLeft, setTimeLeft] = useState((msPerDay * h2oFrequency) -  Date.now() - lastWaterTime);
  const [daysLeft, setDaysLeft] = useState(Math.floor(timeLeft / msPerDay));
  const [hoursLeft, setHoursLeft] = useState(Math.floor((timeLeft % msPerDay) / msPerHour));
  const [minutesLeft, setMinutesLeft] = useState(Math.floor((timeLeft % msPerHour) / msPerMinute))
  const [secondsLeft, setSecondsLeft] = useState(Math.floor((timeLeft % msPerMinute) / 1000))
  const [secondsPassed, setSecondsPassed] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsPassed(prevSeconds => prevSeconds + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    setTimeLeft((msPerDay * h2oFrequency) - Date.now() - lastWaterTime - (secondsPassed * 1000))
    setDaysLeft(Math.floor(timeLeft / msPerDay))
    setHoursLeft(Math.floor((timeLeft % msPerDay) / msPerHour))
    setMinutesLeft(Math.floor((timeLeft % msPerHour) / msPerMinute))
    setSecondsLeft(Math.floor((timeLeft % msPerMinute) / 1000))
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

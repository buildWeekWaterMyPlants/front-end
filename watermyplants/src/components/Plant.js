import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deletePlant } from "../actions";
import { Link } from "react-router-dom";

const msPerMinute = 1000 * 60;
const msPerHour = msPerMinute * 60;
const msPerDay = msPerHour * 24;

function Plant(props) {

  const {id, nickname, species, h2oFrequency, deletePlant, editFunction, lastWaterTime = new Date("Aug 24, 2021 16:37:52").getTime()} = props;

  const [secondsPassed, setSecondsPassed] = useState(0);
  // Date.now() - lastWaterTime = time in ms since we last watered
  const calculateMsLeft = () => (msPerDay * h2oFrequency) + (lastWaterTime - Date.now());

  const [timeLeft, setTimeLeft] = useState(calculateMsLeft());

  const calculateSecondsLeft = () => Math.floor((timeLeft % msPerMinute) / 1000)
  const calculateMinutesLeft = () => Math.floor((timeLeft % msPerHour) / msPerMinute)
  const calculateHoursLeft = () => Math.floor((timeLeft % msPerDay) / msPerHour)
  const calculateDaysLeft = () => Math.floor(timeLeft / msPerDay)

  const [daysLeft, setDaysLeft] = useState(calculateDaysLeft());
  const [hoursLeft, setHoursLeft] = useState(calculateHoursLeft());
  const [minutesLeft, setMinutesLeft] = useState(calculateMinutesLeft())
  const [secondsLeft, setSecondsLeft] = useState(calculateSecondsLeft())
  
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsPassed(prevSeconds => prevSeconds + 1)
    }, 1000)
    return function() {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    setTimeLeft(calculateMsLeft())
    setDaysLeft(calculateDaysLeft())
    setHoursLeft(calculateHoursLeft())
    setMinutesLeft(calculateMinutesLeft())
    setSecondsLeft(calculateSecondsLeft())
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

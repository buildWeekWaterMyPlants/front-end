import React, { useState } from "react";
import { connect } from "react-redux";
import { deletePlant } from "../actions";
import { Link } from "react-router-dom";
import useCountdown from "../hooks/useCountdown";

const msPerMinute = 1000 * 60;
const msPerHour = msPerMinute * 60;
const msPerDay = msPerHour * 24;

export function Plant(props) {
  const {
    id,
    nickname,
    species,
    h2oFrequency,
    deletePlant,
    editFunction,
    lastWaterTime = new Date("Aug 24, 2021 16:37:52").getTime(),
  } = props;

  
  const msPerWatering = msPerDay * h2oFrequency;
  const timeSinceWatered = Date.now() - lastWaterTime;
  
  const calculateMsLeft = () => msPerWatering - timeSinceWatered;
  
  
  const [daysLeft, hoursLeft, minutesLeft, secondsLeft, msLeft] = useCountdown(calculateMsLeft)

  const timerReset = () => {};

  const handleDelete = () => deletePlant(id);

  return (
    <div className="border rounded-lg flex w-1/4 m-4 shadow-lg  bg-green-300">
      <div className="flex flex-col p-6">
        <h3 className="text-2xl text-left font-bold">{nickname}</h3>
        <h6 className="text-lg text-left italic">{species}</h6>
        <h6 className="text-sm text-left">
          Water Frequency: {h2oFrequency} days
        </h6>
        {msLeft > 0 ?  
        <h6 className="text-sm text-left animate-pulse">
          {daysLeft} days, <br/>
          {hoursLeft} hours, <br/>
          {minutesLeft} minutues, <br/>
          {secondsLeft} seconds. <br/>
        </h6>
        : <h2>Water it!!!</h2>}
        <button
          onClick={(e) => timerReset()}
          className="border ml-16 text-md bg-blue-200 hover:bg-blue-300 mt-4 p-2 rounded-md w-2/3"
        >
          Water Plant
        </button>
      </div>
        <div onClick={handleDelete} className="cursor-pointer p-2"> ❌</div>
        <Link to={`/plantlist/update/${id}`} className="cursor-pointer p-2">✏️</Link>
    </div>
  );
}

export default connect(null, { deletePlant })(Plant);

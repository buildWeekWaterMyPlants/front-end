import React, { useState } from "react";
import { connect } from "react-redux";
import { deletePlant } from "../actions";

function Plant(props) {

  const {id, nickname, species, h2oFrequency, deletePlant, editFunction} = props;


  const initialTime = `0 days, 0 hours, 0 minutes, 0 seconds`


  const [time, setTime] = useState(h2oFrequency*86400)

  
  const timerReset = ()=>{
    clearTimeout(timer)
    setTime(h2oFrequency*86400)
  }
  
    
    function countdown(){
      
      setTime(time - 1)
      
    }

   

    let timer = setTimeout(countdown, 1000)
    // let days = Math.floor(time/86400)
    // let daysCalc = time/86400
    // let hours = Math.floor(daysCalc/24)
    
    // let minutes = Math.floor(hours/60)
    // let seconds = Math.floor(minutes/60)

  const handleDelete = () => deletePlant(id)
    // function secondsToDhms(seconds) {
    //   seconds = Number(seconds);
    //   var d = Math.floor(seconds / (3600*24));
    //   var h = Math.floor(seconds % (3600*24) / 3600);
    //   var m = Math.floor(seconds % 3600 / 60);
    //   var s = Math.floor(seconds % 60);
      
    //   var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    //   var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    //   var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    //   var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    //   return dDisplay + hDisplay + mDisplay + sDisplay;
    //   }

  return (
    <div className="border rounded-lg flex w-1/4 m-4 shadow-lg  bg-green-300">
      <div className="flex flex-col p-6">
      <h3 className="text-2xl text-left font-bold">{nickname}</h3>
      <h6 className="text-lg text-left italic">{species}</h6>
      <h6 className="text-sm text-left">Water Frequency: {h2oFrequency} days</h6>
      <h6 className="text-sm text-left animate-pulse">  Time until water: {time}
         {/* {days} days, {hours} hours, {minutes} minutues, {seconds} seconds.  */}
          </h6>
          <button onClick={e=>timerReset()} className="border ml-16 text-md bg-blue-200 hover:bg-blue-300 mt-4 p-2 rounded-md w-2/3">Water Plant</button>
      </div>
        <div onClick={handleDelete} className="cursor-pointer p-2"> ❌</div>
        <div onClick={e=>editFunction(id, nickname, species, h2oFrequency)}className="cursor-pointer p-2">✏️</div>
    </div>
  )
}

export default connect(null, { deletePlant })(Plant);

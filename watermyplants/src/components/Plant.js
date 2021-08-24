import React from "react";
import { connect } from "react-redux";
import { deletePlant } from "../actions";

function Plant(props) {

  const {id, nickname, species, h2oFrequency, deletePlant, editFunction} = props;



  const handleDelete = () => deletePlant(id)

  return (
    <div className="border rounded-lg flex w-1/4 m-4 shadow-lg  bg-green-300 hover:bg-green-200">
      <div className="flex flex-col p-6">
      <h3 className="text-2xl text-left">{nickname}</h3>
      <h6 className="text-lg text-left">{species}</h6>
      <h6 className="text-md text-left">Time Until Water: {h2oFrequency} days</h6>
      </div>
        <div onClick={handleDelete} className="cursor-pointer p-2"> ❌</div>
        <div onClick={e=>editFunction(id, nickname, species, h2oFrequency)}className="cursor-pointer p-2">✏️</div>
    </div>
  )
}

export default connect(null, { deletePlant })(Plant);

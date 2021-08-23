import React from "react";

function Plant(props) {
  const {id, nickname, species, h2oFrequency} = props;
  return (
    <div className="border flex flex-col w-1/4 m-4 shadow-lg p-6 bg-green-300 hover:bg-green-200">
      <h3 className="text-2xl text-left">{nickname}</h3>
      <h6 className="text-lg text-left">{species}</h6>
      <h6>Time Until Water: {h2oFrequency} days</h6>
    </div>
  )
}

export default Plant;

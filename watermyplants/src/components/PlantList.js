import React, { useState, useEffect } from "react";
import Plant from "./Plant";
import AddPlant from "./AddPlant";
import { connect } from "react-redux";
import { getPlants } from "../actions";



function PlantList(props) {
  const { getPlants, plants } = props;

  useEffect(() => {
    getPlants()
  }, [])

  const [revealForm, setRevealForm] = useState(false);
  const toggleForm = () => setRevealForm(!revealForm)

  return (
    <div className="flex w-90 justify-center flex-col text-center items-center mt-10">
      <h2 className="text-5xl font-bold m-4"> Your Garden </h2>
      <button onClick={toggleForm} className="border p-2 text-md bg-yellow-200 hover:bg-yellow-300 rounded-md">
        Add A Plant
      </button>

      {revealForm && <AddPlant/>}

      <div className="w-11/12 mt-6 h-full border-8 flex-wrap flex justify-center items-start">
        {plants?.map(plant =>
            <Plant {...plant} key={plant.id}/>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  plants: state.plants
})

export default connect(mapStateToProps, { getPlants })(PlantList);

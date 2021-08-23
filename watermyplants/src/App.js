import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddPlant from "./components/AddPlant";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PlantList from "./components/PlantList";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <div>
      <header></header>

      <Login />

      <SignUp />

      <PlantList />

      {/* <AddPlant /> */}

      <UpdateUser />
    </div>
  );
}

export default App;

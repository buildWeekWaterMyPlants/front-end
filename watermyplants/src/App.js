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
      <Switch>
        <Route>
          <Login />
        </Route>
        <Route>
          <SignUp />
        </Route>
        <Route>
          <PlantList />
        </Route>
        <Route>
          <AddPlant />
        </Route>
        <Route>
          <UpdateUser />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import "./styles/App.css";
import { Route, Switch, Link } from "react-router-dom";
import AddPlant from "./components/AddPlant";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PlantList from "./components/PlantList";
import UpdateUser from "./components/UpdateUser";
import { connect } from "react-redux";
import { checkAuth } from "./actions";

function App(props) {
  const { authenticated } = props;

  return (
    <div>
      <header>
        <nav>
          <Link to="/login">Login</Link>
          {authenticated && <>
            <Link>Logout</Link>
            <Link to="/plants">Plants</Link>
            <Link to="/plants/add">Add Plant</Link>
            <Link to="/plants/update">Update Plant</Link>
          </>}
        </nav>
      </header>

      <Login />

      <SignUp />

      <PlantList />

      <AddPlant />

      <UpdateUser />
    </div>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.authenticated
})

export default connect(mapStateToProps)(App);

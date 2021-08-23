import "./styles/App.css";
import { Route, Switch, Link } from "react-router-dom";
import AddPlant from "./components/AddPlant";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PlantList from "./components/PlantList";
import UpdateUser from "./components/UpdateUser";
import { connect } from "react-redux";

function App(props) {
  const { authenticated } = props;

  return (
    <div>
      <header>
        <nav>
          {authenticated ? <>
            <Link>Logout</Link>
            <Link to="/user/update">Update User</Link>
          </> : <Link to="/login">Login</Link>}
        </nav>
      </header>

      <Login />

      <SignUp />

      <PlantList />

      {/* <AddPlant /> */}

      <UpdateUser />
    </div>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.authenticated
})

export default connect(mapStateToProps)(App);

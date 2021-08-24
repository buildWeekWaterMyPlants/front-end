import "./styles/App.css";
import { Route, Switch, Link } from "react-router-dom";
import AddPlant from "./components/AddPlant";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PlantList from "./components/PlantList";
import UpdateUser from "./components/UpdateUser";
import { connect } from "react-redux";
import Marketing from "./components/Marketing";

function App(props) {
  const { authenticated } = props;

  return (
    <div>
      <header className="Header-bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <nav className="Nav-bar">
          {authenticated ? (
            <>
              <Link>Logout</Link>
              <Link to="/updateuser">Update User</Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button>Login</button>
              </Link>
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
            </>
          )}
        </nav>
      </header>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

        <Route path="/plantlist">
          <PlantList />
        </Route>

        <Route path="/updateuser">
          <UpdateUser />
        </Route>
        <Route exact path="/">
          <Marketing />
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.authenticated,
});

export default connect(mapStateToProps)(App);

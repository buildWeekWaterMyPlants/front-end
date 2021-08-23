import axios from "axios";
import axiosWithAuth from "../services/axiosWithAuth";

export const CHECK_AUTHORIZATION = "CHECK_AUTHORIZATION";
export const checkAuth = (authenticated) => ({
  type: CHECK_AUTHORIZATION,
  payload: authenticated,
});

export const START_REQUEST = "START_REQUEST";
export const FINISH_AUTHENTICATION = "FINISH_AUTHENTICATION";
export const FAILED_REQUEST = "FAILED_REQUEST";
export const LOGOUT = "LOGOUT";

export const login = (userInfo) => (dispatch) => {
  dispatch({ type: START_REQUEST });
  axios
    .post("", userInfo) //insert url here
    .then((res) => {
      dispatch({ type: FINISH_AUTHENTICATION, payload: res.data }); // may need to adjust this later
    })
    .catch((err) => {
      dispatch({ type: FAILED_REQUEST, payload: err });
    });
};

export const signUp = (userInfo) => (dispatch) => {
  dispatch({ type: START_REQUEST });
  axios
    .post("", userInfo) //insert url here
    .then((res) => {
      dispatch({ type: FINISH_AUTHENTICATION, payload: res.data }); // may need to adjust this later
    })
    .catch((err) => {
      dispatch({ type: FAILED_REQUEST, payload: err });
    });
};



    dispatch({ type: START_REQUEST })
    axios.post("", userInfo) //insert url here
        .then(res => {
            dispatch({ type: FINISH_AUTHENTICATION, payload: res.data }) // may need to adjust this later
        })
        .catch(err => {
            dispatch({ type: FAILED_REQUEST, payload: err })
        })
}

export const UPDATE_PLANT = "UPDATE_PLANT";

export const updatePlant = (plantData) => (dispatch) => {
    dispatch({ type: START_REQUEST })
    axiosWithAuth().put("", plantData)
        .then(res => {
            dispatch({ type: UPDATE_PLANT, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FAILED_REQUEST, payload: err })
        })
}
export const UPDATE_USER = "UPDATE_USER";

export const updateUser = (userData) => (dispatch) => {
    dispatch({ type: START_REQUEST })
    axiosWithAuth().put("", userData)
        .then(res => {
            dispatch({ type: UPDATE_USER, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FAILED_REQUEST, payload: err })
        })
}

export const DELETE_PLANT = "DELETE_PLANT";

export const deletePlant = (plantData) => (dispatch) => {
    dispatch({ type: START_REQUEST })
    axiosWithAuth().delete("", plantData)
        .then(res => {
            dispatch({ type: DELETE_PLANT, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FAILED_REQUEST, payload: err })
        })
}

export const logOut = () => (dispatch) => {
  axios.post("").then((res) => {
    dispatch({ type: LOGOUT });
  });
};

import axios from "axios";
import axiosWithAuth from "../services/axiosWithAuth";

export const CHECK_AUTHORIZATION = "CHECK_AUTHORIZATION";
export const checkAuth = (authenticated) => ({
  type: CHECK_AUTHORIZATION,
  payload: authenticated,
});

export const START_REQUEST = "START_REQUEST";
export const AUTHENTICATE = "AUTHENTICATE";
export const FAILED_REQUEST = "FAILED_REQUEST";
export const FINISH_REQUEST = "FINISH_REQUEST";

export const login = (userInfo) => (dispatch) => {
  dispatch({ type: START_REQUEST });
  axios
    .post("https://watermyplantsbuildweek.herokuapp.com/api/auth/login", userInfo) 
    .then((res) => {
      dispatch({ type: AUTHENTICATE, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FAILED_REQUEST, payload: err });
    })
    .finally(() => {
      dispatch({ type: FINISH_REQUEST })
    })
};

export const signUp = (userInfo) => (dispatch) => {
  dispatch({ type: START_REQUEST });
  axios
    .post("https://watermyplantsbuildweek.herokuapp.com/api/auth/register", userInfo) 
    .then((res) => {
      console.log(res)
      dispatch({ type: AUTHENTICATE, payload: res.data }); 
    })
    .catch((err) => {
      dispatch({ type: FAILED_REQUEST, payload: err });
    })
    .finally(() => {
      dispatch({ type: FINISH_REQUEST })
    })
};

export const UPDATE_PLANT = "UPDATE_PLANT";

export const updatePlant = (plantData) => (dispatch) => {
  dispatch({ type: START_REQUEST });
  axiosWithAuth()
    .put(`/api/plants/${plantData.id}`, plantData)
    .then((res) => {
      dispatch({ type: UPDATE_PLANT, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FAILED_REQUEST, payload: err });
    })
    .finally(() => {
      dispatch({ type: FINISH_REQUEST })
    })
};

export const GET_PLANTS = "GET_PLANTS";

export const getPlants = () => (dispatch) => {
  dispatch({ type: START_REQUEST });
  axiosWithAuth()
    .get("/api/plants")
    .then((res) => {
      dispatch({ type: GET_PLANTS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FAILED_REQUEST, payload: err });
    })
    .finally(() => {
      dispatch({ type: FINISH_REQUEST })
    })
};

export const GET_PLANT = "GET_PLANT";

export const getPlant = (id) => (dispatch) => {
  dispatch({ type: START_REQUEST });
  axiosWithAuth()
    .get(`/api/plants/${id}`)
    .then((res) => {
      dispatch({ type: GET_PLANT, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FAILED_REQUEST, payload: err });
    })
    .finally(() => {
      dispatch({ type: FINISH_REQUEST })
    })
};

export const DELETE_PLANT = "DELETE_PLANT";

export const deletePlant = (id) => (dispatch) => {
  dispatch({ type: START_REQUEST });
  axiosWithAuth()
    .delete(`/api/plants/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_PLANT, payload: id });
    })
    .catch((err) => {
      dispatch({ type: FAILED_REQUEST, payload: err });
    })
    .finally(() => {
      dispatch({ type: FINISH_REQUEST })
    })
};

export const ADD_PLANT = "ADD_PLANT";

export const addPlant = (plantData) => (dispatch) => {
  dispatch({ type: START_REQUEST });
  axiosWithAuth()
    .post("/api/plants", plantData)
    .then((res) => {
      dispatch({ type: ADD_PLANT, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FAILED_REQUEST, payload: err });
    })
    .finally(() => {
      dispatch({ type: FINISH_REQUEST })
    })
};

export const UPDATE_USER = "UPDATE_USER";

export const updateUser = (userData) => (dispatch) => {
  dispatch({ type: START_REQUEST });
  axiosWithAuth()
    .put("/api/user", userData)
    .then((res) => {
      dispatch({ type: UPDATE_USER, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FAILED_REQUEST, payload: err });
    })
    .finally(() => {
      dispatch({ type: FINISH_REQUEST })
    })
};

export const LOGOUT = "LOGOUT";

export const logOut = () => (dispatch) => {
  axios.post("")
    .then(() => {
      dispatch({ type: LOGOUT });
    })
    .catch((err) => {
      dispatch({ type: FAILED_REQUEST, payload: err })
    })
    .finally(() => {
      dispatch({ type: FINISH_REQUEST })
    })
};

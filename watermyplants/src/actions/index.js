import axios from "axios";

export const CHECK_AUTHORIZATION = "CHECK_AUTHORIZATION";
export const checkAuth = (authenticated) => ({
    type: CHECK_AUTHORIZATION, 
    payload: authenticated
})

export const START_REQUEST = "START_REQUEST";
export const FINISH_AUTHENTICATION = "FINISH_AUTHENTICATION";
export const FAILED_REQUEST = "FAILED_REQUEST";

export const login = () => (dispatch) => {
    dispatch({ type: START_REQUEST })
    axios.post("") //insert url here
        .then(res => {
            dispatch({ type: FINISH_AUTHENTICATION, payload: res.data }) // may need to adjust this later
        })
        .catch(err => {
            dispatch({ type: FAILED_REQUEST, payload: err })
        })
}

export const signUp = () => (dispatch) => {
    dispatch({ type: START_REQUEST })
    axios.post("") //insert url here
        .then(res => {
            dispatch({ type: FINISH_AUTHENTICATION, payload: res.data }) // may need to adjust this later
        })
        .catch(err => {
            dispatch({ type: FAILED_REQUEST, payload: err })
        })
}
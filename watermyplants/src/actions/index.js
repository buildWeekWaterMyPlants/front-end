import axios from "axios";

export const CHECK_AUTHORIZATION = "CHECK_AUTHORIZATION";
export const checkAuth = (authenticated) => ({
    type: CHECK_AUTHORIZATION, 
    payload: authenticated
})

export const START_LOGIN = "START_LOGIN";
export const FINISH_LOGIN = "FINISH_LOGIN";
export const FAILED_LOGIN = "FAILED_LOGIN";

export const login = () => (dispatch) => {
    dispatch({ type: START_LOGIN })
    axios.post("") //insert url here
        .then(res => {
            dispatch({ type: FINISH_LOGIN, payload: res.data }) // may need to adjust this later
        })
        .catch(err => {
            dispatch({ type: FAILED_LOGIN, payload: err })
        })
}
import { CHECK_AUTHORIZATION, FINISH_AUTHENTICATION, START_REQUEST } from "../actions"

const initialState = {
    authenticated: localStorage.getItem("token") || false,
    makingRequest: false,
}

const reducer = (state = initialState, actions) => {
    switch(actions.type) {
        case CHECK_AUTHORIZATION:
            return {
                ...state,
                authenticated: actions.payload
            }
        case START_REQUEST:
            return {
                ...state,
                makingRequest: true,
            }
        case FINISH_AUTHENTICATION:
            return {
                ...state,
                authenticated: true,
                makingRequest: false
            }
        default:
            return state
    }
}

export default reducer;
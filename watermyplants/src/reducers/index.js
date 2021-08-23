import { CHECK_AUTHORIZATION } from "../actions"

const initialState = {
    authenticated: false
}

const reducer = (state = initialState, actions) => {
    switch(actions.type) {
        case CHECK_AUTHORIZATION:
            return {
                ...state,
                authenticated: actions.payload
            }
        default:
            return state
    }
}

export default reducer;
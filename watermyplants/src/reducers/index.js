import {
  CHECK_AUTHORIZATION,
  FINISH_AUTHENTICATION,
  START_REQUEST,
  LOGOUT,
} from "../actions";

const initialState = {
  authenticated: localStorage.getItem("token") || false,
  makingRequest: false,
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case CHECK_AUTHORIZATION:
      return {
        ...state,
        authenticated: actions.payload,
      };
    case START_REQUEST:
      return {
        ...state,
        makingRequest: true,
      };
    case FINISH_AUTHENTICATION:
      localStorage.setItem("token", actions.payload);
      return {
        ...state,
        authenticated: true,
        makingRequest: false,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, authenticated: false, makingRequest: false };

    default:
      return state;
  }
};

export default reducer;

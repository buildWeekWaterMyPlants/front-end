import {
  CHECK_AUTHORIZATION,
  AUTHENTICATE,
  FINISH_REQUEST,
  START_REQUEST,
  GET_PLANTS,
  GET_PLANT,
  ADD_PLANT,
  DELETE_PLANT,
  UPDATE_PLANT,
  LOGOUT,
} from "../actions";
import dummyData from "../mock";

const initialState = {
  authenticated: localStorage.getItem("token") || false,
  makingRequest: false,
  plants: dummyData,
  plantToUpdate: {}
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
    case FINISH_REQUEST:
      return {
        ...state,
        makingRequest: false,
      };
    case AUTHENTICATE:
      localStorage.setItem("token", actions.payload.created_at);
      return {
        ...state,
        authenticated: true
      };
    case ADD_PLANT:
      return {
        ...state,
        plants: [...state.plants, actions.payload]
      }
    case GET_PLANTS:
      return {
        ...state,
        plants: actions.payload
      }
    case GET_PLANT:
      return {
        ...state,
        plantToUpdate: actions.payload
      }
    case DELETE_PLANT:
      return {
        ...state,
        plants: state.plants.filter(plant => 
          plant.id !== actions.payload
        )
      }
    case UPDATE_PLANT:
      return {
        ...state,
        plants: state.plants.map(plant => 
          plant.id !== actions.payload.id ? plant : actions.payload
        )
      }
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, authenticated: false, makingRequest: false };
    default:
      return state;
  }
};

export default reducer;

import { combineReducers } from "redux";
import { HOME_PAGE_LOADED, LOGIN } from "../actions";

const home = (state = {}, action) => {
  if (action.type === HOME_PAGE_LOADED) {
    return action.payload;
  }

  return state;
};

const defaultState = {
  appName: "Conduit"
};

const appName = (state = defaultState, action) => {
  return state;
};

const auth = (state = {}, action) => {
  if (action.type === LOGIN) {
    return {
      ...state,
      inprogres: false,
      error: action.error ? action.payload.errors : null
    };
  }
  return state;
};

const rootReducer = combineReducers({ appName, home, auth });

export default rootReducer;

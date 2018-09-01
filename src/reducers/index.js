import { combineReducers } from "redux";
import { HOME_PAGE_LOADED } from "../actions";

const home = (state = {}, action) => {
  console.log("Gor here");
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

const rootReducer = combineReducers({ appName, home });

export default rootReducer;

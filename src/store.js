import { applyMiddleware, createStore } from "redux";
import { promiseMiddleware } from "./middleware";
import rootReducer from "./reducers";

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(rootReducer, middleware);

export default store;

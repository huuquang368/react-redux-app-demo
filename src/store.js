import { createStore } from "redux";
import rootReducer from "./reducers";

// first params: rootReducer
const store = createStore(rootReducer);
export default store;

import { combineReducers } from "redux";
import counterReducer from "./components/about/Reducers/CounterReducer";

const allReducers = combineReducers({
  counterReducer,
});

export default allReducers;

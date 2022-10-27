import { combineReducers } from "redux";
import counterReducer from "./components/redux/reducers/CounterReducer";

const allReducers = combineReducers({
  counterReducer,
});

export default allReducers;

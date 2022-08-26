// import  from "./list";
import todoReducer from './todoSlice'
import { combineReducers } from "redux";

// The key of this object will be the name of the store
const rootReducers = combineReducers({ list: todoReducer });

export default rootReducers;
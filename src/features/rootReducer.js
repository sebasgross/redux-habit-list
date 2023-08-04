import habitReducer from './habitSlice'
import allHabitListsReducer from './allHabitLists'
import { combineReducers } from "redux";

// The key of this object will be the name of the store
const rootReducers = combineReducers({ list: habitReducer, allHabitLists: allHabitListsReducer });

export default rootReducers;
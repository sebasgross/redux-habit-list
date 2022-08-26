import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice'

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("habit-list");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}


export const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  // applyMiddleware: saveToLocalStorage(),
  preloadedState: loadFromLocalStorage()
  
});

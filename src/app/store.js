import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice'


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
  preloadedState: loadFromLocalStorage()
  
});

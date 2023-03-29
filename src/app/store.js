import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice'


function addToOldHabitLists() {
  localStorage.setItem('old-habit-list', JSON.stringify(state.todoList))
}

function checkIfSundayUpdate() {
  const day = new Date().getDay()
  if (day === 7) {
    console.log('Its Sunday. Time to refresh')
  } else {
    return
  }
}
// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("habit-list");
    checkIfSundayUpdate()
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

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice'
import archivedReducer from '../features/archiveListsSlice'

function loadFromLocalStorage() {
  try {
    const serialisedHabitListState = localStorage.getItem("habit-list");
    const serialisedArchivedState = localStorage.getItem("archive-habit-list");

    // checkIfSundayUpdate()
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedHabitListState, serialisedArchivedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}


export const store = configureStore({
  reducer: {
    todos: todoReducer,
    archivedHabitLists: archivedReducer
  },
  preloadedState: loadFromLocalStorage()
  
});

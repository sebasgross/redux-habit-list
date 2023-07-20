import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import todoReducer, { setHabitList } from '../features/todoSlice'
// import archivedReducer from '../features/archiveListsSlice'
import HabitService from '../services/HabitService';
import { createLogger } from 'redux-logger'; // Optional, for logging actions and state changes
import thunk from 'redux-thunk'; // Import Redux Thunk middleware

const logger = createLogger(); // Create Redux Logger (Optional)

// function loadFromLocalStorage() {
//   try {
//     const serialisedHabitListState = localStorage.getItem("habit-list");
//     // const serialisedArchivedState = localStorage.getItem("archive-habit-list");

//     // checkIfSundayUpdate()
//     if (serialisedState === null) return undefined;
//     return JSON.parse(serialisedHabitListState);
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// }

export const getHabitList = () => (dispatch) => {
  HabitService.getHabitList()
    .then((response) => {
      dispatch(setHabitList(response.list)); // Dispatch the setHabitList action to update the state
    })
    .catch((err) => {
      console.log(err);
    });
};

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    // archivedHabitLists: archivedReducer
  },
  // preloadedState: getHabitList(),
  middleware: [thunk, logger], // Add Redux Thunk middleware and Redux Logger (Optional)
});

store.dispatch(getHabitList());
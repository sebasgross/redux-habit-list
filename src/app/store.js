import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import habitReducer, { setHabitList } from '../features/habitSlice'
import allHabitListsReducer, { setHabitLists } from '../features/allHabitLists';
// import archivedReducer from '../features/archiveListsSlice'
import HabitService from '../services/HabitService';
import { createLogger } from 'redux-logger'; // Optional, for logging actions and state changes
import thunk from 'redux-thunk'; // Import Redux Thunk middleware

// const logger = createLogger(); // Create Redux Logger (Optional)

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

export const getAllHabitLists = () => (dispatch) => {
  HabitService.getAllHabitLists()
    .then((response) => {
      dispatch(setHabitLists(response))
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getHabitList = () => (dispatch) => {
  const todaysDate = new Date().getDay()
  const todaysDateUTC = new Date().getUTCDate()
  const refreshHabitList = todaysDate === 1 // We refresh the habit list every Monday (1)

  HabitService.getHabitList()
    .then((response) => {
      if (response) {
        console.log(response)
        if (refreshHabitList && new Date(response.createdAt).getUTCDate() !== todaysDateUTC) {
          // create new habit list making copy of old one and put it in the Top state
          console.log('Its monday, and Habit List needs a refresh')
          HabitService.refreshHabitList()
            .then((response) => {
              dispatch(setHabitList(response))
            })
            .catch((err) => {
              console.log(err)
            })
        
        } else {
          console.log('Its Not monday, Or habit list has already been refreshed')
          dispatch(setHabitList(response)) // Dispatch the setHabitList action to update the state
        }
      } else {
        console.log("First time creating a Habit List")
        dispatch(setHabitList({
          list: [],
          user: '',
          _id: '',
        })) 
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const store = configureStore({
  reducer: {
    habits: habitReducer,
    allHabitLists: allHabitListsReducer
    // archivedHabitLists: archivedReducer
  },
  // preloadedState: getHabitList(),
  middleware: [thunk], // Add Redux Thunk middleware and Redux Logger (Optional)
});

store.dispatch(getHabitList())
store.dispatch(getAllHabitLists());

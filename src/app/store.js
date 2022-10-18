import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import axios from 'axios';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

// load string from localStarage and convert into an Object
// invalid output must be undefined
// function loadFromLocalStorage() {
//   try {
//     const serialisedState = localStorage.getItem("habit-list");
//     if (serialisedState === null) return undefined;
//     return JSON.parse(serialisedState);
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// }


const checkHabitList = async () => {
  try {
      const response = await axios.get('http://localhost:4000/user/get/habit-list');
      console.log("Store component" , response.data);
      return response.data;
  } catch (err) {
      // Handle Error Here
      console.error(err);
      return undefined
  }
};


export const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  // applyMiddleware: saveToLocalStorage(),
  preloadedState: await checkHabitList()
  
});

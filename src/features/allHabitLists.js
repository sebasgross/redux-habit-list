import { createSlice } from "@reduxjs/toolkit";
// import HabitService from "../services/HabitService";

const initialState = {
  habitLists: [],
};

const allHabitListSlice = createSlice({
  name: "allHabitLists",
  initialState,
  reducers: {
    //Simple functions
    setHabitLists: (state, action) => {
        state.habitLists = action.payload;
      // localStorage.setItem("habit-list", JSON.stringify(action.payload));
    },
}
});

export const { setHabitLists } =
allHabitListSlice.actions;

export const selectAllHabitLists = (state) => state.allHabitLists.habitLists;

export default allHabitListSlice.reducer;

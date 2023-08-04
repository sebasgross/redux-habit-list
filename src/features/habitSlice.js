import { createSlice } from "@reduxjs/toolkit";
import HabitService from "../services/HabitService";

const initialState = {
  habitList: {
    list: [],
    user: '',
    _id: '',
  },
};

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    //Simple functions
    setHabitList: (state, action) => {
        state.habitList = action.payload;
      // localStorage.setItem("habit-list", JSON.stringify(action.payload));
    },

    saveHabit: (state, action) => {
      const { item, done, off, id, habitListId } = action.payload;
      if (habitListId === 0) {
        HabitService.createHabitList({ item, done, off, id })
        .then((response) => {
          console.log(response)
        })
        .catch((err) => console.log(err));
      } else {
        console.log("habit update");
        const newState = [...state.habitList.list];
        newState.push({ item, done, off, id });

        HabitService.updateHabitList({ _id: habitListId, list: newState })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));

      }

      state.habitList.list.push({ item, done, off, id });
      // localStorage.setItem("habit-list", JSON.stringify(state.habitList));
    },

    markHabitOff: (state, action) => {
      const { habitListId } = action.payload;
      state.habitList.list.forEach((habit) => {
        if (action.payload.id === habit.id) {
          if (habit.off.includes(action.payload.day)) {
            console.log("day is inside off array");
            for (var i = 0; i < habit.off.length; i++) {
              if (habit.off[i] === action.payload.day) {
                habit.off.splice(i, 1);
              }
            }
          } else {
            habit.off.push(action.payload.day);
          }
        }
      });
      // localStorage.setItem("habit-list", JSON.stringify(state.habitList));
      HabitService.updateHabitList({ _id: habitListId, list: state.habitList.list })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
    // setCheck: (state, action) => {
    //     state.habitList.map(item => {
    //         if(action.payload === item.id) {
    //             if (item.done === true) {
    //                 item.done = false
    //             } else {
    //                 item.done = true
    //             }
    //         }
    //     })
    // },
    // Map through Array[string] check each habit. If their ID matches the param:id`
    markHabit: (state, action) => {
      const { habitListId } = action.payload;
      state.habitList.list.forEach((item) => {
        if (action.payload.id === item.id) { // Check which habit
          if (item.done.includes(action.payload.day)) { // Mark it off after being done
            for (var i = 0; i < item.done.length; i++) {
              if (item.done[i] === action.payload.day) {
                item.done.splice(i, 1);
              }
            }
          } else { // mark it done
            item.done.push(action.payload.day);
          }
        }
      });
      // localStorage.setItem("habit-list", JSON.stringify(state.habitList));
      HabitService.updateHabitList({ _id: habitListId, list: state.habitList.list })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },

    removeHabit: (state, action) => {
      const { habitListId, id } = action.payload;
      for (var i = 0; i < state.habitList.list.length; i++) {
        if (state.habitList.list[i].id === action.payload.id) {
          console.log(i);
          state.habitList.list.splice(i, 1);
        }
      }
      // localStorage.setItem("habit-list", JSON.stringify(state.habitList));
      HabitService.updateHabitList({ _id: habitListId, list: state.habitList.list })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },

    refreshAllHabits: (state) => {
      console.log('Refresh All Habits')
        // const { item, done, off, id } = state.habitList
        const newList = []

        state.habitList.list.forEach((habit) => {
          habit.done = []
          habit.off = []
          newList.push(habit)
        })

        state.habitList.id = ''
        
        HabitService.createHabitList(newList)
        .then((response) => {
          console.log(response)
        })
        .catch((err) => console.log(err));
    
        // localStorage.setItem('habit-list', JSON.stringify(state.habitList))
    }
  },
});

export const { setHabitList, saveHabit, markHabit, removeHabit, markHabitOff, refreshAllHabits } =
  habitSlice.actions;

export const selectHabitList = (state) => state.habits.habitList;

export default habitSlice.reducer;

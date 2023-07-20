import { createSlice } from "@reduxjs/toolkit";
import HabitService from "../services/HabitService";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //Simple functions
    setHabitList: (state, action) => {
      state.todoList = action.payload;
      localStorage.setItem("habit-list", JSON.stringify(action.payload));
    },

    saveHabit: (state, action) => {
      const { item, done, off, id, habitListId } = action.payload;
      console.log("save habit slice:", action.payload);

      if (habitListId !== 0) {
        console.log("habit update");
        const newState = [...state.todoList];
        newState.push({ item, done, off, id });

        HabitService.updateHabitList({ _id: habitListId, list: newState })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      } else {
        HabitService.createHabitList({ item, done, off, id })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      }

      state.todoList.push({ item, done, off, id });
      localStorage.setItem("habit-list", JSON.stringify(state.todoList));
    },

    markHabitOff: (state, action) => {
      const { habitListId } = action.payload;
      state.todoList.forEach((habit) => {
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
      localStorage.setItem("habit-list", JSON.stringify(state.todoList));
      HabitService.updateHabitList({ _id: habitListId, list: state.todoList })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
    // setCheck: (state, action) => {
    //     state.todoList.map(item => {
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
      state.todoList.forEach((item) => {
        if (action.payload.id === item.id) {
          if (item.done.includes(action.payload.day)) {
            console.log("day is inside done array");
            for (var i = 0; i < item.done.length; i++) {
              if (item.done[i] === action.payload.day) {
                item.done.splice(i, 1);
              }
            }
          } else {
            item.done.push(action.payload.day);
          }
        }
      });
      localStorage.setItem("habit-list", JSON.stringify(state.todoList));
      HabitService.updateHabitList({ _id: habitListId, list: state.todoList })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },

    removeHabit: (state, action) => {
      console.log("Removing Habit");
      const { habitListId, id } = action.payload;
      for (var i = 0; i < state.todoList.length; i++) {
        if (state.todoList[i].id === action.payload.id) {
          console.log(i);
          state.todoList.splice(i, 1);
        }
      }
      localStorage.setItem("habit-list", JSON.stringify(state.todoList));
      HabitService.updateHabitList({ _id: habitListId, list: state.todoList })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },

    // removeAllHabits: (state, action) => {
    //     state.todoList = [];
    //     localStorage.setItem('habit-list', JSON.stringify(state.todoList))
    // }
  },
});

export const { setHabitList, saveHabit, markHabit, removeHabit, markHabitOff } =
  todoSlice.actions;

export const selectTodoList = (state) => state.todos.todoList;

export default todoSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: JSON.parse(localStorage.getItem('habit-list')) || [] 
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: { //Simple functions
    saveHabit: (state, action) => {
        state.todoList.push(action.payload)
        localStorage.setItem('habit-list', JSON.stringify(state.todoList))

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
    markHabit: (state, action) => {
        state.todoList.forEach(item => {
            if(action.payload.id === item.id) {
                if (item.done.includes(action.payload.day)){
                    console.log("day is inside done array")
                    for(var i =0; i < item.done.length; i++) {
                        if (item.done[i] === action.payload.day){
                            item.done.splice(i,1)

                        }
                    }
                } else {
                    item.done.push(action.payload.day)
                }
            }
        })
        localStorage.setItem('habit-list', JSON.stringify(state.todoList))
    },
    removeHabit: (state, action) => {
        for (var i=0; i < state.todoList.length; i++) {
            if (state.todoList[i].id === action.payload){
                console.log(i)
                state.todoList.splice(i, 1)
            }
        }
        localStorage.setItem('habit-list', JSON.stringify(state.todoList))
        },

    removeAllHabits: (state, action) => {
        state.todoList = [];
        localStorage.setItem('habit-list', JSON.stringify(state.todoList))
    }
    }

  })

export const { saveHabit, markHabit, removeHabit, removeAllHabits } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer
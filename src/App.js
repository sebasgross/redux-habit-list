import React from 'react';
import './App.css';
import Input from './Components/Input';
import TodoItem from './Components/TodoItem';

import { useSelector } from 'react-redux';
import{ selectTodoList } from './features/todoSlice';

const days = [0, 1,2,3,4,5,6,7,8,9,10]


// const hList = [{
//   item: "Habit 1",
//   done: [1,5,6],
//   id: Date.now()
// },
// {
//   item: "habit2",
//   done: [],
//   id: Date.now()
// }
// ]

function App() {
  console.log("State habit list", JSON.parse(localStorage.getItem('habit-list')))

  let todoList = useSelector(selectTodoList);
  // if (JSON.parse(localStorage.getItem('habit-list')).length > 0) {
  //   todoList = JSON.parse(localStorage.getItem('habit-list'))
  // }

  console.log(todoList)

  
  return (
    <div className="app">
      <h1>To do list</h1>
      <div className="todo-container">
      <Input />

        <div className="todo-list">

        <div className="todo-days">
        {/* {
          days.map(day => (
            <div className="habit-box">
            <p>{day}</p>
            </div>
          ))
        } */}
        </div>
        {

          todoList.map(habit => (
            <TodoItem 
              name={habit.item}
              done={habit.done}
              id={habit.id}

            />
          ))
        }
        </div>
      </div>
    </div>
  );
}

export default App;

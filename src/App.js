import React from 'react';
import './App.css';
import Input from './Components/Input';
import TodoItem from './Components/TodoItem';

import { useSelector } from 'react-redux';
import{ selectTodoList } from './features/todoSlice';
import TodoCompleted from './Components/TodoCompleted';

const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]


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

  // const checkDay = (day) => {


  // }
  
  return (
    <div className="app">
      <h1>Habit List</h1>
      <Input />

      <div className="habit-list-board">
        <div className="rules-container">
          <h2>Rules</h2>
          <p>Add as many habits as you'd like. If I were you I would start with one. Everyday, come to this habit list and check off your habit for the day. Every 31 days you start from scratch. However, you dont have to do all your habits everyday, you can also mark them OFF for a day. Every day will begin as red until you mark it "OFF" or "GREEN".</p>
        </div>
      <div className="todo-container">
        <div className="todo-list">
        <div className="todo-days">
          <p>Days</p>
        {
          days.map(day => (
            <div className="habit-box">
            <p>{day}</p>
            </div>
          ))
        }
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
        <div className="todo-days">
  
          {/* {
          days.map(day => {
            console.log(checkDay(day))
            if (done.includes(day)){
              return(
              // <p>marked</p>
              <div className={`habit-box ${checkDay(day)}`}>
              <button className="button done" onClick={e => mark(day)}></button>
              </div>
              )
            } else {
              return(
                <div className={`habit-box ${checkDay(day)}`}>
                <button className="button not-done" onClick={e => mark(day)}> </button>
                </div>
              )
            }
          })
        } */}


          <TodoCompleted todoList={todoList} />


        </div>
        {/* {
          days.map(day => (
            <div className="habit-box">
            
            </div>
          ))

        } */}
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;

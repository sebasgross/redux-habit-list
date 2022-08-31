import React from 'react';
import './App.css';
import Input from './Components/Input';
import TodoItem from './Components/TodoItem';

import { useSelector } from 'react-redux';
import{ selectTodoList } from './features/todoSlice';
import TodoCompleted from './Components/TodoCompleted';

const days = [1,2,3,4,5,6,7]


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
  // const dispatch = useDispatch()

  var one_day=1000*60*60*24;

  let todoList = useSelector(selectTodoList);
  var dateOfFirst = todoList[0].id;

  var today = Date.now();
  // var dd = String(today)

  console.log(today, dateOfFirst)

  console.log("saes", (today - dateOfFirst)/one_day)

  // if (dateOfFirst === dd){
  //   console("tmime to deelte habit list")
  //   // dispatch(removeAllHabits())
  // } else {
  //   console.log("we good")
  //   console.log(dateOfFirst, dd)

  // }
  // console.log(typeof )

  return (
    <div className="app">
      <h1>Habit List</h1>
      <Input />

      <div className="habit-list-board">
        {/* <div className="rules-container">
          <h2>Rules</h2>
          <p>Add as many habits as you'd like. If I were you I would start with one. Everyday, come to this habit list and check off your habit for the day. Every 31 days you start from scratch. However, you dont have to do all your habits everyday, you can also mark them OFF for a day. Every day will begin as red until you mark it "OFF" or "GREEN".</p>
        </div> */}
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
          todoList.map(habit => {
            if (habit) {
              return (
              <TodoItem 
              name={habit.item}
              done={habit.done}
              id={habit.id}
            />
            )} else { 
            return(
              <div className="todo-item">
                
                </div>
            )}

            })
        }
        <div className="todo-days">
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
      <div className="rules-container">
        <div className="container">
        <h2>Rules</h2>
          <h2>Step 1</h2>

          <p>Add as many habits as you'd like. If I were you I would start with one.</p>
          <h2>Step 2</h2>

          <p> Everyday, come to this habit list and check off your habit for the day.</p> 
          <h2>Step 3</h2>

           <p> Every 5 days you start from scratch. However, you dont have to do all your habits everyday, you can also mark them OFF for a day. </p>
           <p>Every day will begin as red until you mark it as "OFF" or "GREEN".</p>

        </div>
         
        </div>
    </div>
    </div>
  );
}

export default App;

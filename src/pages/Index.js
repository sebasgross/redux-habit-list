import React, { useState, useEffect } from 'react';
import Input from '../Components/Input';
import TodoItem from '../Components/TodoItem';
import { useSelector } from 'react-redux';
import{ selectTodoList } from '../features/todoSlice';
import TodoCompleted from '../Components/TodoCompleted';
import axios from 'axios';

const days = [1,2,3,4,5,6,7]


function Index() {

  useEffect(() => {
    checkPrivate();
  });

  function checkPrivate() {
    axios.get('http://localhost:4000/user/private',{withCredentials:true})
      .then((response) => {
        console.log("Index", response.data)
      })
      .catch((e) => console.log("Private", e))
  }

  let todoList = useSelector(selectTodoList);
  

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
            console.log(habit)
            if (habit) {
              return (
              <TodoItem 
              name={habit.name}
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
           <p> Every 7 days you start from scratch.</p>
        </div>
         
        </div>
    </div>
    </div>
  );
}

export default Index;

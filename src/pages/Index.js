/* eslint-disable no-console */
import React, { useContext } from "react";
// import './App.css';
import Input from "../Components/Input";
import Habit from "../Components/Habit";
import { useSelector } from "react-redux";
import { selectTodoList } from "../features/todoSlice";
import TodoCompleted from "../Components/TodoCompleted";

const days = [1, 2, 3, 4, 5, 6, 7];

function Index() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="index-page">
      <div className="header">
        <h1>Habit List</h1>
        <Input />
      </div>
      <div className="habit-list-board">
        <div className="todo-container">
          <div className="todo-list">
            <div className="todo-days">
              <p>Days</p>
              {days.map((day) => (
                <div className="habit-container">
                  <div className="habit-box">
                    <p>{day}</p>
                  </div>
                  <button className="button-off disable"></button>
                </div>
              ))}
            </div>
            {todoList.map((habit) => {
              if (habit) {
                return (
                  <Habit
                    name={habit.item}
                    done={habit.done}
                    off={habit.off}
                    id={habit.id}
                  />
                );
              } else {
                return <div className="todo-item"></div>;
              }
            })}
            <div className="todo-days">
              <TodoCompleted todoList={todoList} />
            </div>
          </div>
        </div>
      </div>
      <div className="rules-container">
        <div className="container">
          <h2>Rules</h2>
          <h2>Step 1</h2>
          <p>
            Add as many habits as you'd like. If I were you I would start with
            one.
          </p>

          <h2>Step 2</h2>
          <p>
            {" "}
            Everyday, come to this habit list and check off your habit for the
            day.
          </p>

          <h2>Step 3</h2>
          <p> Every 7 days you start from scratch.</p>
        </div>
      </div>
    </div>
  );
}

export default Index;

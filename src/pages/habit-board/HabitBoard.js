/* eslint-disable no-console */
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { selectHabitList } from "../../features/habitSlice";
import { selectAllHabitLists } from "../../features/allHabitLists";
import InputBar from "../../Components/InputBar/InputBar";
import HabitListBar from "../../Components/HabitDate/HabitListBar";
import HabitBox from "../../Components/HabitBox/HabitBox";
import CompletedBox from "../../Components/CompletedBox/CompletedBox";
import { daysDictionary } from "../../constants/days.dictionary";

const days = [1, 2, 3, 4, 5, 6, 7];

function HabitBoard() {
  const habitList = useSelector(selectHabitList);
  const allHabitLists = useSelector(selectAllHabitLists);
  const { list } = habitList

  return (
    <div className="index-page">
      <div className="index-input-container">
        <InputBar habitListId={habitList._id}/>
      </div>
      <HabitListBar habitLists={allHabitLists} />
      <div className="habit-list-board">
        <div className="todo-container">
          <div className="todo-list">
            <div className="todo-days">
              <p>Days</p>
              {days.map((day) => (
                <div className="habit-container">
                  <div className="habit-box">
                    <p>{daysDictionary[day]}</p>
                  </div>
                  <button className="button-off disable"></button>
                </div>
              ))}
            </div>
            {list.map((habit) => {
              if (habit) {
                return (
                  <HabitBox
                    name={habit.item}
                    done={habit.done}
                    off={habit.off}
                    id={habit.id}
                    habitListId={habitList._id}
                  />
                );
              } else {
                return <div className="todo-item"></div>;
              }
            })}
            <div className="todo-days">
              <CompletedBox list={list} />
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

export default HabitBoard;

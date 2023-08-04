/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from "react";
import "./HabitDate.css"
import HabitDate from "./HabitDate";
import { useDispatch } from "react-redux";
import { setHabitList } from "../../features/habitSlice";

const HabitListBar = ( { habitLists } ) => {
  const [selectedHabitList, setSelectedHabitList] = useState()
  const dispatch = useDispatch(); //You have to activate it

  useEffect(() => {
    setSelectedHabitList(habitLists[0]?._id)
  }, [])

  const handleHabitListChange = (habit) => {
    dispatch(setHabitList(habit))
    setSelectedHabitList(habit._id)
  }

  console.log(habitLists[0])
  console.log(selectedHabitList)


  return (
    <div className="all-habits-lists-container">
    {habitLists.map((habit, key) => {
      return(
        <HabitDate wrapperClass={selectedHabitList === habit._id} handleHabitListChange={() => handleHabitListChange(habit)} key={key} habit={habit} />
      )
    })}
  </div>
  );
};

export default HabitListBar;

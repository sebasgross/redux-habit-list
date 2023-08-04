/* eslint-disable no-console */
import React, {} from "react";
import "./HabitDate.css"

const HabitDate = ( {key, habit, handleHabitListChange, wrapperClass} ) => {

  const  selected = wrapperClass ? 'selected' : null

  console.log('wrapper habit date', wrapperClass)
  return (
    <div key={key} >
      <button 
      className={`list-date-button ${selected}`}
      onClick={() => handleHabitListChange()}
      >
      {new Date(habit.createdAt).getUTCMonth() + 1}
      /
      {new Date(habit.createdAt).getUTCDate()}
      </button>
  </div>
  );
};

export default HabitDate;

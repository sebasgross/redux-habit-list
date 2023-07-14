/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux' // this is for using the fucntoins
import { markHabit, removeHabit, markHabitOff } from '../features/todoSlice' //the actual function
import '../index.css'
import { motion } from "framer-motion"

const days = [1,2,3,4,5,6,7]


const TodoItem = ({name, done, id, off}) => {

    const dispatch = useDispatch() //You have to activate it

    const checkDay = (day) => {
      var today = new Date();
      var dd = today.getDay()

      if (dd === 0) {
        dd = 7
      }

      if (day > dd) {
        return "locked"
      } else {
        return "unlocked"
      }
    }



  const markHabitHandler = (day) => {
      if(checkDay(day) === "locked"){
        return
      } else {
        
        dispatch(markHabit({
          id: id,
          day: day
        }))
      }

  }

  const turnHabitOff = (day) => {      
      dispatch(markHabitOff({
        id: id,
        day: day
      }))
  }

  const deleteHabit = (id) => {
    dispatch(removeHabit(id)) //Removed Habit from List
  }

  const sliceIf = (string) => {
    if (window.innerWidth <= 375) {
      if (string.length > 7) {
        return string.slice(0,7)
      } else {
        return string
      }
    } else {
      if (string.length >= 12) {
        return string.slice(0,12)
      } else return string
    } 
  }

  // const success_rate = 7 - off?.length

  return (
    <motion.div exit={{ x: -3 }}  initial={{ x: -5 }} animate={{ x : 0}} className="todo-item" transition={{ ease: "easeOut", duration: 0.1 }}>
        {/* <span> 7 / {success_rate}</span> */}
        <p>{sliceIf(name)}</p>
        <div className="todo-item-column">
        <div className="todo-days-habits">
        {
          days.map(day => {
            if (done.includes(day)){
              return(
              <div className="habit-container">
                <div className={`habit-box ${checkDay(day)} done ${off.includes(day)}`}>
                  <button className="button done" onClick={e => markHabitHandler(day)}></button>
                </div>
                <button className={`button-off ${off.includes(day)}`} onClick={e => turnHabitOff(day)}></button>
              </div>
              )
            } else {
              return(
                <div className="habit-container">
                  <div className={`habit-box ${checkDay(day)} not-done ${off.includes(day)}`}>
                    <button className="button not-done" onClick={e => markHabitHandler(day)}></button>
                  </div>
                  <button className={`button-off ${off.includes(day)}`}  onClick={e => turnHabitOff(day)}></button>
                </div>
              )
            }
          })
        }
        </div>
        </div>

        <button className="button delete" onClick={() => deleteHabit(id)}></button>

    </motion.div>
  )
}

export default TodoItem
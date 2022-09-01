import React from 'react'
import { useDispatch } from 'react-redux' // this is for using the fucntoins
import { markHabit, removeHabit } from '../features/todoSlice' //the actual function
import '../index.css'
import { motion } from "framer-motion"

const days = [1,2,3,4,5,6,7]


const TodoItem = ({name, done, id}) => {
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

    const mark = (day) => {
      if(checkDay(day) === "locked"){
        return
      } else {
        dispatch(markHabit({
          id: id,
          day: day
        }))
      }

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

  return (
    <motion.div exit={{ x: -3 }}  initial={{ x: -5 }} animate={{ x : 0}}className="todo-item" transition={{ ease: "easeOut", duration: 0.1 }}>
        <p>{sliceIf(name)}</p>
        <div className="todo-item-column">
        
        <div className="todo-days-habits">
        {
          days.map(day => {
            if (done.includes(day)){
              return(
              // <p>marked</p>
              <div className={`habit-box ${checkDay(day)} done`}>
              <button className="button done" onClick={e => mark(day)}></button>
              </div>
              )
            } else {
              return(
                <div className={`habit-box ${checkDay(day)} not-done`}>
                <button className="button not-done" onClick={e => mark(day)}> </button>
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
import React from 'react'
import { useDispatch } from 'react-redux' // this is for using the fucntoins
import { markHabit, removeHabit } from '../features/todoSlice' //the actual function
import '../index.css'
const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]


const TodoItem = ({name, done, id}) => {
    const dispatch = useDispatch() //You have to activate it

    const checkDay = (day) => {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');

      if (day > dd) {
        return "locked"
      } else {
        return "unlocked"
      }
    }

    const mark = (day) => {
      dispatch(markHabit({
        id: id,
        day: day
      }))
  }
    const deleteHabit = (id) => {
      dispatch(removeHabit(id)) //Removed Habit from List
    }

  return (
    <div className="todo-item">
        <p>{name}</p>
        <div className="todo-item-column">
        
        <div className="todo-days">
        {
          days.map(day => {
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
        }
        </div>
        </div>

        <button className="input-button delete" onClick={() => deleteHabit(id)}>Delete Habit</button>

    </div>
  )
}

export default TodoItem
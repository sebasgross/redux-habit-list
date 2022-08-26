import React from 'react'
import Checkbox from '@mui/material/Checkbox';

import { useDispatch } from 'react-redux' // this is for suing the fucntoins
import { setCheck, markHabit } from '../features/todoSlice' //the actual function
import '../index.css'
const days = [1,2,3,4,5,6,7,8,9,10]


const TodoItem = ({name, done, id}) => {
    const dispatch = useDispatch() //You have to activate it

    // const handleCheck = () => {
    //     dispatch(setCheck(id))
    // }

    const mark = (day) => {
      console.log("marking habit", id, day);

      dispatch(markHabit({
        id: id,
        day: day
      }))
  }
  return (
    <div className="todo-item">
        {/* <Checkbox
            checked={done}
            onChange={handleCheck}
/>
        <p>{name}</p> */}
        <p>{name}</p>
        <div className="todo-item-column">
        
        <div className="todo-days">
        {
          days.map(day => {
            if (done.includes(day)){
              return(
              // <p>marked</p>
              <div className="habit-box">
              <button className="button done" onClick={e => mark(day)}></button>
              </div>
              )
            } else {
              return(
                <div className="habit-box">
                <button className="button not-done" onClick={e => mark(day)}> </button>
                </div>
              )
            }
          })
        }
        </div>
        </div>




    </div>
  )
}

export default TodoItem
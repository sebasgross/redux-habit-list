import React from 'react'

const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

const TodoCompleted = ({todoList}) => {

    const checkDay = (day) => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
  
        if (day > dd) {
          return "locked"
        } else {
          return "unlocked"
        }
      }

    const checkIfCompleted = (day) => {
        var completed = 0
        for(var i=0; i < todoList.length; i++) {
            if (todoList[i].done.includes(day)) {
                completed++
            }
        }
        if (completed === todoList.length) {
            return true
        } else {
            return false

        }
        
    }
  
    if (todoList.length > 0){
        return (
            <div>
            <p>Completed?</p>

            <div className='completed-column'>
            {
              days.map(day => {
                if (checkIfCompleted(day)){
                  return(
                    <div className={`habit-box ${checkDay(day)}`}>
                  <button className="button done" ></button>
                    </div>
                  )
                } else {
                  return(
                    <div className={`habit-box ${checkDay(day)}`}>
                    <button className="button not-done"></button>
                      </div>
                  )
                }
              })
            }
        </div>
        </div>

        )
    } 
    
}

export default TodoCompleted
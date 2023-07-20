import React, {useContext, useState} from 'react';
import '../index.css';
import { useDispatch } from 'react-redux';
import { saveHabit } from '../features/todoSlice';
import UserContext from '../app/context/UserContext';

const Input = () => {
    const [input, setInput ] = useState('')
    const dispatch = useDispatch()    
    const user = useContext(UserContext)

    const addHabit = () => {
        dispatch(saveHabit({
            habitListId: user.habitList ? user.habitList : 0,
            item: input,
            done: [],
            off: [],
            id: Date.now()
        }))
    }

  return (
    <div className="input-container">
        <input type="text" value={input} placeholder="Add a habit" onChange={e=>setInput(e.target.value)}/>
        <button className="button input" onClick={addHabit} variant="contained">+</button>
    </div>
  )
}

export default Input

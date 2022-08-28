import React, {useState} from 'react';
import '../index.css';
import { useDispatch } from 'react-redux';
import { saveHabit } from '../features/todoSlice';

const Input = () => {
    const [input, setInput ] = useState('')
    const dispatch = useDispatch()

    const addHabit = () => {
        console.log("Adding todo");

        dispatch(saveHabit({
            item: input,
            done: [],
            id: Date.now()
        }))
    }

  return (
    <div className="input-container">
        <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
        <button className="input-button" onClick={addHabit} variant="contained">ADD HABIT</button>
    </div>
  )
}

export default Input

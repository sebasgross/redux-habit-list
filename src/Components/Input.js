import React, {useState} from 'react';
import '../index.css';
import { useDispatch } from 'react-redux';
import { saveHabit } from '../features/todoSlice';

const Input = () => {
    const [name, setName ] = useState('')
    const dispatch = useDispatch();

    const addHabit = () => {
        console.log("Adding habit");

        dispatch(saveHabit({
            name: name,
            done: [],
            id: Date.now()
        }))
    }

  return (
    <div className="input-container">
        <input type="text"  value={name} placeholder="Add a habit" onChange={e=>setName(e.target.value)}/>
        <button className="button input" onClick={addHabit} variant="contained">+</button>
    </div>
  )
}

export default Input

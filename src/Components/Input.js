import React, {useState} from 'react';
import '../index.css';
import { useDispatch } from 'react-redux';
import { saveHabit } from '../features/todoSlice';

const Input = ({user}) => {
    const [input, setInput ] = useState('')
    const dispatch = useDispatch()    

    const addHabit = () => {
        console.log("Adding todo");

        dispatch(saveHabit({
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

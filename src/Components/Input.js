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
    <div>
        <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
        <button onClick={addHabit}>Add habit</button>
    </div>
  )
}

export default Input

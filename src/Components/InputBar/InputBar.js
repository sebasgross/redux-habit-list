import React, {useContext, useState} from 'react';
// import "../../pages/index/Index.css";
import { useDispatch } from 'react-redux';
import { saveHabit } from '../../features/habitSlice';

const InputBar = ({habitListId}) => {
    const [input, setInput ] = useState('')
    const dispatch = useDispatch()    

    const addHabit = () => {
        dispatch(saveHabit({
            habitListId: habitListId ? habitListId : 0,
            item: input,
            done: [],
            off: [],
            id: Date.now()
        }))
        window.location.reload(false);
    }

  return (
    <div className="input-container">
        <input type="text" value={input} placeholder="Add a habit" onChange={e=>setInput(e.target.value)}/>
        <button className="button input" onClick={addHabit} variant="contained">+</button>
    </div>
  )
}

export default InputBar

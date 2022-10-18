import React, { useState, useEffect } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import Routes from './Routes';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setHabitList } from './features/todoSlice';


function App() {
  // const dispatch = useDispatch()
  const [user, setUser ] = useState({});
  const [habitList, setHabitList ] = useState([]);

  const [logged, setLogged ] = useState(false);

  const dispatch = useDispatch();


  useEffect(() => {
    checkPrivate();
  });

  //Log in
  const log_in = () => {
    axios.post("http://localhost:4000/user/login", { 
      "username": "11qw2qw1@gmail.com",
      "password": "wqwqwqwqw"
    }, {withCredentials:true})
      .then((response)=> {
        setUser(response.data)
        setHabitList(response.data.habitList)
        console.log(response.data)

      })
      .catch((e)=> console.log("Log In",e))

  }

  //Add habit list to store
//   const habitListToStore = () => {
//     if(!logged){
//       return
//      }
//      dispatch(setHabitList(user.habitList));
// }

  //Log out
  const log_out = () => {
    axios.get("http://localhost:4000/user/logout", {withCredentials:true})
      .then(() => setLogged(false))
      .catch((e) => console.log(e))
  }
  
  //Check if there is a User Logged in - returns a boolean
  function checkPrivate() {
    axios.get('http://localhost:4000/user/private',{withCredentials:true})
      .then((response) => {
        // setUser(response.data)
        setLogged(true)
        // console.log(response.data)
      })
      .catch((e) => console.log("Private", e))
  }




  // let todoList = useSelector(selectTodoList);
 
  // console.log(typeof )
  // render(){
    // console.log(user, habitList)
    return (
      <div className="app">
        <button onClick={log_in}>Log In</button>
        <button onClick={log_out}>Log out</button>

        <Routes />
      </div>
    );
  // }
  
}

export default withRouter(App);
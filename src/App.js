import React, {Component} from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import Routes from './Routes';


// const hList = [{
//   item: "Habit 1",
//   done: [1,5,6],
//   id: Date.now()
// },
// {
//   item: "habit2",
//   done: [],
//   id: Date.now()
// }
// ]

class App extends Component{
  // const dispatch = useDispatch()



  // let todoList = useSelector(selectTodoList);
 
  // console.log(typeof )
  render(){
    return (
      <div className="app">
        <Routes />
      </div>
    );
  }
  
}

export default withRouter(App);
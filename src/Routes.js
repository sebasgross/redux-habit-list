import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Index from './pages/index/Index';
import LogIn from './pages/auth/LogIn';
import SignUp from './pages/auth/SignUp';
import HabitBoard from './pages/habit-board/HabitBoard';

export default ( isLogged ) => (<Switch>

    <Route exact path='/log-in' render={(() => !isLogged ? <LogIn /> : <Redirect to={'/habit-board'}/> )} />
    <Route exact path='/sign-up' render={(()=> <SignUp />)} />
    <Route exact path='/habit-board' render={(() => !isLogged ? <Redirect to={'/log-in'}/> : <HabitBoard />)} />  
    <Route exact path='/' render={(() => !isLogged ? <Redirect to={'/log-in'}/> : <Index />)} />  

</Switch>)

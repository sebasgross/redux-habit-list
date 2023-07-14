import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import SignIn from './Components/auth/LogIn';


export default () => (<Switch>
    <Route exact path='/' render= {() => <Index />}/>
    
</Switch>)

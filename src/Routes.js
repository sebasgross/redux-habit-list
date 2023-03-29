import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './pages/Index';


export default () => (<Switch>
    <Route exact path='/' component={Index} />
    
</Switch>)

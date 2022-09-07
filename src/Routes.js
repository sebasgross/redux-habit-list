import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './pages/Index';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (<Switch>
    <Route exact path='/' component={Index} />
    
</Switch>)

/* eslint-disable no-console */
import React, {Component} from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import Routes from './Routes';
import AuthProvider from './app/useAuth';

class App extends Component{

  render(){
    return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
    );
  }
  
}

export default withRouter(App);
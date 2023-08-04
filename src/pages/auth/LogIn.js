/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
// import useAuth from '../../app/useAuth';
import './SignUp.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import SignUp from './SignUp';
import { Button } from '@mui/material';
import AuthService from '../../services/AuthService';
// import AuthService from '../../services/AuthService';

const LogIn = () => {
  const [signUp , setSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState();
  const [isLogged, setIsLogged] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic here

    if (username && password !== '') {
      AuthService.logIn(username, password)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => console.log(err))
    }

  }

  return (
    <div className="signup-container">
    <h2>Log In</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
    <div>
      <Button 
        onClick={() => setSignUp(true)}
      > Sign Up
      </Button>
    </div>
  </div>
  ) 
}

export default LogIn
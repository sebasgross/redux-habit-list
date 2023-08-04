/* eslint-disable no-console */
import React, { useState } from 'react'
import './SignUp.css';
import { Button } from '@mui/material';
import AuthService from '../../services/AuthService';

const SignUp = ({setSignUp}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState();
  // const [isLogged, setIsLogged] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic here

    if (username && password !== '') {
      AuthService.signUp({username, password})
        .then((res) => {
          console.log(res)
          history.pushState({
            URL: 'http://localhost:3000/'
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
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
        <button type="submit">Sign Up</button>
      </form>
      <Button 
          onClick={() => setSignUp(false)}
        > Log In
        </Button>
    </div>
  )
}

export default SignUp
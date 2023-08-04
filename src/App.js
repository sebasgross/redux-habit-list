/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './Routes';
import './index.css'
import AuthService from './services/AuthService';
import { UserProvider } from './app/context/UserContext';
import NavBar from './Components/NavBar/NavBar';

const App = () => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  function checkIfUserIsLoggedIn() {
    setLoading(true)
    AuthService.checkForUser()
    .then((res) => {
      if (res.data.user) {
        const user = res.data.user;
        setUser(user);
        setIsLogged(true);
        setLoading(false)
      } else {
        setIsLogged(false);
        setLoading(false)
      }
    })
    .catch((err) => {
      console.log(err)
      setLoading(false)
    })
  }

    return (
      <>
        <NavBar isLogged={isLogged} />
        <UserProvider value={user}>
          <Routes user={user} isLogged={isLogged}/>
        </UserProvider>
        <footer
          className='footer'
        >

        </footer>
        </>
    );
}
  

export default withRouter(App);
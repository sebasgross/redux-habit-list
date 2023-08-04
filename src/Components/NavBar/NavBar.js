/* eslint-disable no-console */
import React, { useContext, useState } from "react";
import habitListImage from '../../public/habit-list.png'
import '../../index.css'
import { Link } from "react-router-dom";

function NavBar({isLogged}) {
  const logOut = () => {
    AuthService.logOut()
      .then(() => {
        window.location.replace('http://localhost:3000/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  if (isLogged) {
    return (
      <div className="navbar">
        <div>
        <a 
            href={'http://localhost:3000/'}
        >
          <img src={habitListImage} width={80} />
        </a>
        <div className="buttons-container">
        <a href='http://localhost:3000/habit-board'>
        <button className="button-habit-board">
            MY HABIT BOARD
          </button>
        </a>
          <button className="button-logout" onClick={() => logOut()}>
            LOG OUT
          </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <div>
        <a 
            href={'http://localhost:3000/'}
        >
          <img src={habitListImage} width={80} />
        </a>
          <button className="button-logout" href='http://localhost:3000/log-in'>
            LOG IN
          </button>
        </div>
      </div>
    );
  }
}

export default NavBar;

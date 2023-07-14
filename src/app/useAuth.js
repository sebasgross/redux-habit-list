import { useState, useEffect } from "react";
import AuthService from "../services/AuthService";
import LogIn from "../Components/auth/LogIn";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  function checkIfUserIsLoggedIn() {
    AuthService.checkForUser().then((res) => {
      console.log(res);
      if (res.data.user) {
        const user = res.data.user;
        setUser(user);
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
      setLoading(false);
    });
  }

  return user === null ? <LogIn /> : children;
}

export default AuthProvider;

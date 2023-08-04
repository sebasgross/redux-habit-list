import http from "./BaseService";

const logIn = (username, password) =>
  http
    .post("user/login", {
      username,
      password,
    })
    .then((response) => response);

const signUp = (crendentials) =>
  http
    .post("user/signup", {
      username: crendentials.username,
      password: crendentials.password,
    })
    .then((response) => response);

const checkForUser = () =>
  http.get("user/private").then((response) => response);

const logOut = () =>
  http
    .get("user/logout")
    .then((response) => response);

export default {
  logIn,
  signUp,
  checkForUser,
  logOut,
};

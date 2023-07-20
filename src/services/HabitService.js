import http from "./BaseService";

const updateHabitList = (habitList) =>
  http
    .post("habit-list/update", {
      habitList,
    })
    .then((response) => response);

const createHabitList = (habitList) =>
  http
    .post("habit-list/create", {
      habitList,
    })
    .then((response) => response);

const getHabitList = () =>
  http.get("habit-list/get").then((response) => response.data);

export default {
  updateHabitList,
  createHabitList,
  getHabitList,
};

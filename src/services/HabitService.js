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

const getSpecificHabitList = (id) =>
  http
    .get("habit-list/get/id", 
      {id},
    )
    .then((response) => response.data);

const getAllHabitLists = () =>
  http.get("habit-list/get/all").then((response) => response.data);

const refreshHabitList = () =>
  http
    .post("habit-list/refresh")
    .then((response) => response);

export default {
  updateHabitList,
  createHabitList,
  getHabitList,
  getSpecificHabitList,
  getAllHabitLists,
  refreshHabitList,
};

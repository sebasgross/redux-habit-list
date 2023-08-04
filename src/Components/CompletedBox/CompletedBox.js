import React, { } from "react";
import { motion } from "framer-motion";

const days = [1, 2, 3, 4, 5, 6, 7];

const CompletedBox = ({ list }) => {

  const checkIfFutureDay = (day) => {
    var today = new Date();
    var dd = today.getDay();

    if (dd === 0) {
      dd = 7;
    }

    if (day > dd) {
      return "locked";
    } else {
      return "unlocked";
    }
  };

  const checkIfCompleted = (day) => {
    var completed = 0;
    for (var i = 0; i < list.length; i++) {
      if (list[i].done.includes(day) || list[i].off.includes(day)) {
        completed++;
      }
    }
    if (completed === list.length) {
      return true;
    } else {
      return false;
    }
  };

  if (list.length > 0) {
    return (
      <motion.div
        exit={{ x: -3 }}
        initial={{ x: -5 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 0.1 }}
        className="todo-completed-column"
      >
        <p>
          <b>Success</b>
        </p>

        <div className="completed-column">
          {days.map((day) => {
            if (checkIfCompleted(day)) {
              return (
                <div className="habit-container">
                  <div className={`habit-box ${checkIfFutureDay(day)} done`}>
                    <button className="button done"></button>
                  </div>

                  <button className="button-off disable"></button>
                </div>
              );
            } else {
              return (
                <div className="habit-container">
                  <div
                    className={`habit-box ${checkIfFutureDay(day)} not-done`}
                  >
                    <button className="button not-done"></button>
                  </div>

                  <button className="button-off disable"></button>
                </div>
              );
            }
          })}
        </div>
      </motion.div>
    );
  }
};

export default CompletedBox;

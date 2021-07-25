import React from "react";
import { connect } from "react-redux";

import Task from "../Task";

export default function TodoList({ tasks }) {
  return (
    <ul className="main_todoList">
      {tasks.map((task) => (
        <Task
          id={task.id}
          key={task.id}
          text={task.text}
          isCompleted={task.isCompleted}
        />
      ))}
    </ul>
  );
}

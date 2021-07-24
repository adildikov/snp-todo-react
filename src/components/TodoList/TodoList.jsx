import React from "react";
import { connect } from "react-redux";

import Task from "../Task";

function TodoList({ tasks }) {
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

export default connect((state) => ({
  tasks: state.tasks,
}))(TodoList);

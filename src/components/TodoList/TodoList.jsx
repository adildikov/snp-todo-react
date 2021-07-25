import React from "react";

import Task from "../Task";

export default function TodoList({ tasks }) {
  return (
    <ul className="main_todoList">
      {tasks.map((task) => (
        <Task
          id={task.id}
          key={task.id}
          BDText={task.text}
          isCompleted={task.isCompleted}
        />
      ))}
    </ul>
  );
}

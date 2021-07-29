import React from "react";
import TaskContainer from "../../containers/task/task";

export default React.memo(function TodoList({ tasks }) {
  return (
    <ul className="main_todoList">
      {tasks.map((task) => (
        <TaskContainer
          id={task.id}
          key={task.id}
          BDText={task.text}
          isCompleted={task.isCompleted}
        />
      ))}
    </ul>
  );
});

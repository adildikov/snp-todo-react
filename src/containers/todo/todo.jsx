import React from "react";
import { connect } from "react-redux";
import TodoList from "../../components/TodoList";
import FiltersContainer from "../filters/filters";
import InputContainer from "../input/input";

function ToDo({ tasks, filter }) {
  const filteredTasks = (tasks, filter) => {
    switch (filter) {
      case "active":
        return tasks.filter((task) => !task.isCompleted);
      case "completed":
        return tasks.filter((task) => task.isCompleted);
      default:
        return tasks;
    }
  };

  return (
    <main>
      <InputContainer />
      <FiltersContainer
        tasks={filteredTasks(tasks, filter)}
        allTasks={tasks}
        filter={filter}
      />
      <TodoList tasks={filteredTasks(tasks, filter)} />
    </main>
  );
}

export default connect(({ tasks, filter }) => ({
  tasks,
  filter,
}))(React.memo(ToDo));

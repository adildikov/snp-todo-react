import React from "react";
import { connect } from "react-redux";
import Filters from "../Filters";
import Input from "../Input";
import Title from "../Title";
import TodoList from "../TodoList";

function App({ tasks, filter }) {
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
    <div className="wrapper">
      <Title title="Todo List" />
      <main>
        <Input />
        <Filters tasks={filteredTasks(tasks, filter)} filter={filter} />
        <TodoList tasks={filteredTasks(tasks, filter)} />
      </main>
    </div>
  );
}

export default connect(({ tasks, filter }) => ({
  tasks,
  filter,
}))(App);

import React from "react";
import { useSelector } from "react-redux";
import TodoList from "../../components/TodoList";
import FiltersContainer from "../filters/filters";
import InputContainer from "../input/input";

export default function ToDo() {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);

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

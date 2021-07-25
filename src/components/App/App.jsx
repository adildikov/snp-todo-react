import React from "react";
import { connect } from "react-redux";
import Filters from "../Filters";
import Input from "../Input";
import Title from "../Title";
import TodoList from "../TodoList";

function App({ tasks }) {
  return (
    <div className="wrapper">
      <Title title="Todo List" />
      <main>
        <Input />
        <Filters tasks={tasks} />
        <TodoList tasks={tasks} />
      </main>
    </div>
  );
}

export default connect((state) => ({
  tasks: state.tasks,
}))(App);

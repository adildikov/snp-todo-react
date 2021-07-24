import React from "react";
import Input from "../Input";
import Title from "../Title";
import TodoList from "../TodoList";

export default function App() {
  return (
    <div className="wrapper">
      <Title title="Todo List" />
      <main>
        <Input />
        <TodoList />
      </main>
    </div>
  );
}

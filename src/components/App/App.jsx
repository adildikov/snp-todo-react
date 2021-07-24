import React from "react";
import Input from "../Input";
import Task from "../Task";
import Title from "../Title";

export default function App() {
  return (
    <div class="wrapper">
      <Title title="Todo List" />
      <main>
        <Input />
        <ul>
          <Task />
          <Task />
          <Task />
        </ul>
      </main>
    </div>
  );
}

import React from "react";
import ToDo from "../../containers/todo";
import Title from "../Title";

export default function App() {
  return (
    <div className="wrapper">
      <Title title="Todo List" />
      <ToDo />
    </div>
  );
}

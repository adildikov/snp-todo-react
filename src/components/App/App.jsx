import React from "react";
import Input from "../Input";
import Task from "../Task";

export default function App() {
  return (
    <div>
      <Input />
      <ul>
        <Task />
        <Task />
        <Task />
      </ul>
    </div>
  );
}

import React from "react";

export default function Input(props) {
  return (
    <div className="main_addTodoArea">
      <input
        type="text"
        className="addTodoArea__newTodo"
        placeholder="Add a new case"
      />
      <button className="addTodoArea__addTodo button">Add</button>
    </div>
  );
}

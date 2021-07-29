import React from "react";

export default function Input({
  message,
  handlePressed,
  handleClick,
  handleChange,
}) {
  return (
    <div className="main_addTodoArea">
      <input
        type="text"
        value={message}
        className="addTodoArea__newTodo"
        placeholder="Add a new case"
        onChange={handleChange}
        onKeyPress={handlePressed}
      />
      <button className="addTodoArea__addTodo button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

import React from "react";

export default function Task({
  text,
  isCompleted,
  isEditable,
  handleCompleteChange,
  handleChange,
  handleEdit,
  handleEditOnBlur,
  setEditHandle,
  inputRef,
  handleDelete,
}) {
  return (
    <li className="task">
      <input
        type="checkbox"
        className="todoList__checkbox"
        checked={isCompleted}
        onChange={handleCompleteChange}
      />
      {isEditable ? (
        <input
          type="text"
          className="todotxt_edit"
          ref={inputRef}
          value={text}
          onChange={handleChange}
          onKeyPress={handleEdit}
          onBlur={handleEditOnBlur}
        />
      ) : (
        <div className="todoList__todoText" onDoubleClick={setEditHandle}>
          {text}
        </div>
      )}
      <button onClick={handleDelete} className="todoList__deleteBtn button">
        X
      </button>
    </li>
  );
}

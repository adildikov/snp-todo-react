import React, { useState } from "react";

export default function Task(props) {
  const [text, setText] = useState(props.text);
  const [isCompleted, setCompleted] = useState(props.isCompleted);
  const [isEditable, setEditable] = useState(false);

  const handleDelete = () => {};

  return (
    <li className="task">
      <input
        type="checkbox"
        className="todoList__checkbox"
        checked={isCompleted}
        onChange={() => setCompleted(!isCompleted)}
      />
      {isEditable ? (
        <input type="text" className="todotxt_edit" />
      ) : (
        <div
          className="todoList__todoText"
          onDoubleClick={() => setEditable(true)}
        >
          {props.text}
        </div>
      )}
      <button className="todoList__deleteBtn button">X</button>
    </li>
  );
}

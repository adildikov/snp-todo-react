import React, { useState } from "react";

export default function Task(props) {
  const [text, setText] = useState(props.text);
  const [complete, setComplete] = useState(props.complete);
  const [isEditable, setEditable] = useState(false);

  const handleDelete = () => {};

  return (
    <li className="task">
      <input
        type="checkbox"
        className="todoList__checkbox"
        checked={props.complete}
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
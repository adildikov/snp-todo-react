import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { completeTask, removeTask } from "../../redux/actions/actionCreator";

export default function Task(props) {
  const dispatch = useDispatch();

  const [id, setId] = useState(props.id);
  const [text, setText] = useState(props.text);
  const [isCompleted, setCompleted] = useState(props.isCompleted);
  const [isEditable, setEditable] = useState(false);

  const handleDelete = () => {
    dispatch(removeTask(id));
  };

  const handleCompleteChange = () => {
    dispatch(completeTask(id));
    setCompleted(!isCompleted);
  };

  return (
    <li className="task">
      <input
        type="checkbox"
        className="todoList__checkbox"
        checked={isCompleted}
        onChange={handleCompleteChange}
      />
      {isEditable ? (
        <input type="text" className="todotxt_edit" />
      ) : (
        <div
          className="todoList__todoText"
          onDoubleClick={() => setEditable(true)}
        >
          {text}
        </div>
      )}
      <button onClick={handleDelete} className="todoList__deleteBtn button">
        X
      </button>
    </li>
  );
}

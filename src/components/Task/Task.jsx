import React, { createRef, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  completeTask,
  editTask,
  removeTask,
} from "../../redux/actions/actionCreator";

export default function Task({ id, isCompleted, BDText }) {
  const dispatch = useDispatch();
  const inputRef = createRef();

  const [text, setText] = useState(BDText);
  const [isEditable, setEditable] = useState(false);

  const handleDelete = () => {
    dispatch(removeTask(id));
  };

  const handleCompleteChange = () => {
    dispatch(completeTask(id));
  };

  const handleEdit = (e) => {
    if (e.key === "Enter") {
      setEditable(false);
      if (text) {
        dispatch(editTask(id, text));
      } else {
        dispatch(removeTask(id));
      }
    }
  };

  const handleEditOnBlur = () => {
    setEditable(false);
    if (text) {
      dispatch(editTask(id, text));
    } else {
      dispatch(removeTask(id));
    }
  };

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

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
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => handleEdit(e)}
          onBlur={handleEditOnBlur}
        />
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

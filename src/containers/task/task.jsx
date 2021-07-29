import React, { createRef, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Task from "../../components/Task";

import {
  completeTask,
  editTask,
  removeTask,
} from "../../redux/actions/actionCreator";

export default function TaskContainer({ id, isCompleted, BDText }) {
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

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const setEditHandle = () => {
    setEditable(true);
  };

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <Task
      text={text}
      isCompleted={isCompleted}
      isEditable={isEditable}
      handleCompleteChange={handleCompleteChange}
      handleChange={handleChange}
      handleEdit={handleEdit}
      handleEditOnBlur={handleEditOnBlur}
      setEditHandle={setEditHandle}
      inputRef={inputRef}
      handleDelete={handleDelete}
    />
  );
}

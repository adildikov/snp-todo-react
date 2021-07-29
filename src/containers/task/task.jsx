import React, { createRef, useLayoutEffect, useState } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import Task from "../../components/Task";

import {
  completeTask,
  editTask,
  removeTask,
} from "../../redux/actions/actionCreator";

export default React.memo(function TaskContainer({ id, isCompleted, BDText }) {
  const dispatch = useDispatch();
  const inputRef = createRef();

  const [text, setText] = useState(BDText);
  const [isEditable, setEditable] = useState(false);

  const handleDelete = useCallback(() => {
    dispatch(removeTask(id));
  }, [dispatch, id]);

  const handleCompleteChange = useCallback(() => {
    dispatch(completeTask(id));
  }, [dispatch, id]);

  const handleEdit = useCallback(
    (e) => {
      if (e.key === "Enter") {
        setEditable(false);
        if (text) {
          dispatch(editTask(id, text));
        } else {
          dispatch(removeTask(id));
        }
      }
    },
    [dispatch, id, text]
  );

  const handleEditOnBlur = useCallback(() => {
    setEditable(false);
    if (text) {
      dispatch(editTask(id, text));
    } else {
      dispatch(removeTask(id));
    }
  }, [dispatch, id, text]);

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
});

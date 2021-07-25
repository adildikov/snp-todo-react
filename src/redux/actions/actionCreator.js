import {
  ADD_TASK,
  COMPLETE_TASK,
  EDIT_FILTER,
  EDIT_TASK,
  REMOVE_TASK,
} from "../constants";

export const addTask = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted,
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  id,
});

export const completeTask = (id) => ({
  type: COMPLETE_TASK,
  id,
});

export const editTask = (id, newText) => ({
  type: EDIT_TASK,
  id,
  newText,
});

//FILTERS

export const editFilter = (crnFilter) => ({
  type: EDIT_FILTER,
  crnFilter,
});

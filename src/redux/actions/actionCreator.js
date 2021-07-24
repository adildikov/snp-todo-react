import { ADD_TASK } from "../constants";

export const addTask = (id, text, isComplete) => ({
  type: ADD_TASK,
  id,
  text,
  isComplete,
});

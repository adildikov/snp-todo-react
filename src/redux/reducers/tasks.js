import {
  ADD_TASK,
  COMPLETE_ALL,
  COMPLETE_TASK,
  DELETE_COMPLETED,
  EDIT_TASK,
  REMOVE_TASK,
} from "../constants";
import { load } from "redux-localstorage-simple";

let initialState = load({ namespace: "todos" });

if (
  initialState === undefined ||
  initialState === null ||
  initialState === {} ||
  !initialState.tasks ||
  !initialState.tasks.length
) {
  initialState = {
    tasks: [],
  };
}

const tasks = (
  state = initialState.tasks,
  { id, text, isCompleted, type, newText }
) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id,
          text,
          isCompleted,
        },
      ];
    case REMOVE_TASK:
      return [...state].filter((task) => task.id !== id);
    case COMPLETE_TASK:
      return [...state].map((task) => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
    case EDIT_TASK:
      return [...state].map((task) => {
        if (task.id === id) {
          task.text = newText;
        }
        return task;
      });

    case COMPLETE_ALL:
      if (state.some((task) => !task.isCompleted)) {
        return [...state].map((task) => {
          task.isCompleted = true;
          return task;
        });
      } else {
        return [...state].map((task) => {
          task.isCompleted = false;
          return task;
        });
      }
    case DELETE_COMPLETED:
      return [...state].filter((task) => !task.isCompleted);
    default:
      return state;
  }
};

export default tasks;

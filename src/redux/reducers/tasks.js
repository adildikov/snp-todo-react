import { ADD_TASK, REMOVE_TASK } from "../constants";

const TASKS = [
  {
    id: 1,
    text: "Test1",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Test2",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Test3",
    isCompleted: true,
  },
];

const tasks = (state = TASKS, { id, text, isCompleted, type }) => {
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
    default:
      return state;
  }
};

export default tasks;

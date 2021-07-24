import { ADD_TASK } from "../constants";

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
    default:
      return state;
  }
};

export default tasks;

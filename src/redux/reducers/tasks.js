import { ADD_TASK } from "../constants";

const TASKS = [
  {
    id: 1,
    text: "Test1",
    isComplete: true,
  },
  {
    id: 2,
    text: "Test2",
    isComplete: false,
  },
  {
    id: 3,
    text: "Test3",
    isComplete: true,
  },
];

const tasks = (state = TASKS, { id, text, isComplete, type }) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id,
          text,
          isComplete,
        },
      ];
    default:
      return state;
  }
};

export default tasks;

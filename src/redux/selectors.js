import { createSelector } from "reselect";

const getTasksSelector = (state) => {
  return state.tasks;
};

const getFilterSelector = (state) => {
  return state.filter;
};

export const getTasks = createSelector(getTasksSelector, (tasks) => {
  return tasks;
});

export const getFilter = createSelector(getFilterSelector, (filter) => {
  return filter;
});

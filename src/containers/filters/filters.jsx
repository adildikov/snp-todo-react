import React from "react";
import { useDispatch } from "react-redux";
import Filters from "../../components/Filters";
import {
  completeAll,
  deleteCompleted,
  editFilter,
} from "../../redux/actions/actionCreator";

export default function FiltersContainer({ allTasks, filter }) {
  const dispatch = useDispatch();

  const countActiveTasks = () => {
    let counter = 0;
    if (allTasks) {
      allTasks.forEach((task) => {
        if (!task.isCompleted) {
          counter += 1;
        }
      });
    }
    return counter;
  };

  const filterClickAllHandler = () => {
    dispatch(editFilter("all"));
  };
  const filterClickActiveHandler = () => {
    dispatch(editFilter("active"));
  };
  const filterClickCompletedHandler = () => {
    dispatch(editFilter("completed"));
  };

  const completeAllHandler = () => {
    dispatch(completeAll());
  };

  const deleteCompletedHandler = () => {
    dispatch(deleteCompleted());
  };

  return (
    <Filters
      completeAllHandler={completeAllHandler}
      filter={filter}
      deleteCompletedHandler={deleteCompletedHandler}
      filterClickAllHandler={filterClickAllHandler}
      filterClickActiveHandler={filterClickActiveHandler}
      filterClickCompletedHandler={filterClickCompletedHandler}
      activeTasksAmount={countActiveTasks()}
    />
  );
}

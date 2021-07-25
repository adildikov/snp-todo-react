import React from "react";
import { useDispatch } from "react-redux";
import {
  completeAll,
  deleteCompleted,
  editFilter,
} from "../../redux/actions/actionCreator";

export default function Filters({ tasks, allTasks, filter }) {
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

  const filterClickHandler = (filter) => {
    dispatch(editFilter(filter));
  };

  const completeAllHandler = () => {
    dispatch(completeAll());
  };

  const deleteCompletedHandler = () => {
    dispatch(deleteCompleted());
  };

  return (
    <div className="main_filter">
      <button
        onClick={completeAllHandler}
        className="filter__completeAll button"
      >
        Check all ✓
      </button>
      <button
        onClick={() => filterClickHandler("all")}
        className={`filter__all button ${filter === "all" && "current_filter"}`}
      >
        All
      </button>
      <button
        onClick={() => filterClickHandler("active")}
        className={`filter__active button ${
          filter === "active" && "current_filter"
        }`}
      >
        Active
      </button>
      <button
        onClick={() => filterClickHandler("completed")}
        className={`filter__completed button ${
          filter === "completed" && "current_filter"
        }`}
      >
        Completed
      </button>
      <button
        onClick={deleteCompletedHandler}
        className="filter__deleteCompleted button"
      >
        Delete completed
      </button>
      <div className="counter">Tasks left: {countActiveTasks()}</div>
    </div>
  );
}

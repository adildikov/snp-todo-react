import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  completeAll,
  deleteCompleted,
  editFilter,
} from "../../redux/actions/actionCreator";

export default function Filters({ tasks, filter }) {
  const dispatch = useDispatch();

  const [crnFilter, setCrnFilter] = useState(filter);

  const filterClickHandler = (filter) => {
    setCrnFilter(filter);
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
      <div className="counter">Tasks left: {tasks.length}</div>
    </div>
  );
}

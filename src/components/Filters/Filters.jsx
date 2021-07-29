import React from "react";

export default function Filters({
  completeAllHandler,
  filter,
  deleteCompletedHandler,
  filterClickAllHandler,
  filterClickActiveHandler,
  filterClickCompletedHandler,
  activeTasksAmount,
}) {
  return (
    <div className="main_filter">
      <button
        onClick={completeAllHandler}
        className="filter__completeAll button"
      >
        Check all ✓
      </button>
      <button
        onClick={filterClickAllHandler}
        className={`filter__all button ${filter === "all" && "current_filter"}`}
      >
        All
      </button>
      <button
        onClick={filterClickActiveHandler}
        className={`filter__active button ${
          filter === "active" && "current_filter"
        }`}
      >
        Active
      </button>
      <button
        onClick={filterClickCompletedHandler}
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
      <div className="counter">Tasks left: {activeTasksAmount}</div>
    </div>
  );
}

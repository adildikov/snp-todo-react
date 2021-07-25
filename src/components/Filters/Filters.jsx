import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editFilter } from "../../redux/actions/actionCreator";

export default function Filters({ tasks, filter }) {
  const dispatch = useDispatch();

  const [crnFilter, setCrnFilter] = useState(filter);

  const handlerClick = (filter) => {
    setCrnFilter(filter);
    dispatch(editFilter(filter));
  };

  return (
    <div className="main_filter">
      <button className="filter__completeAll button">Check all ✓</button>
      <button
        onClick={() => handlerClick("all")}
        className={`filter__all button ${filter === "all" && "current_filter"}`}
      >
        All
      </button>
      <button
        onClick={() => handlerClick("active")}
        className={`filter__active button ${
          filter === "active" && "current_filter"
        }`}
      >
        Active
      </button>
      <button
        onClick={() => handlerClick("completed")}
        className={`filter__completed button ${
          filter === "completed" && "current_filter"
        }`}
      >
        Completed
      </button>
      <button className="filter__deleteCompleted button">
        Delete completed
      </button>
      <div className="counter">Tasks left: {tasks.length}</div>
    </div>
  );
}

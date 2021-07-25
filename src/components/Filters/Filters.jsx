import React, { useState } from "react";

export default function Filters({ tasks }) {
  const [crnFilter, setCrnFilter] = useState("all");

  return (
    <div class="main_filter">
      <button class="filter__completeAll button">Check all ✓</button>
      <button class="filter__all button current_filter">All</button>
      <button class="filter__active button">Active</button>
      <button class="filter__completed button">Completed</button>
      <button class="filter__deleteCompleted button">Delete completed</button>
      <div class="counter"></div>
    </div>
  );
}

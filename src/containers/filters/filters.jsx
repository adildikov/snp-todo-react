import React, { useCallback } from "react";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import Filters from "../../components/Filters";
import {
  completeAll,
  deleteCompleted,
  editFilter,
} from "../../redux/actions/actionCreator";

export default React.memo(function FiltersContainer({ allTasks, filter }) {
  const dispatch = useDispatch();

  const countActiveTasks = useMemo(() => {
    let counter = 0;
    if (allTasks) {
      allTasks.forEach((task) => {
        if (!task.isCompleted) {
          counter += 1;
        }
      });
    }
    return counter;
  }, [allTasks]);

  const filterClickAllHandler = useCallback(() => {
    dispatch(editFilter("all"));
  }, [dispatch]);

  const filterClickActiveHandler = useCallback(() => {
    dispatch(editFilter("active"));
  }, [dispatch]);

  const filterClickCompletedHandler = useCallback(() => {
    dispatch(editFilter("completed"));
  }, [dispatch]);

  const completeAllHandler = useCallback(() => {
    dispatch(completeAll());
  }, [dispatch]);

  const deleteCompletedHandler = useCallback(() => {
    dispatch(deleteCompleted());
  }, [dispatch]);

  return (
    <Filters
      completeAllHandler={completeAllHandler}
      filter={filter}
      deleteCompletedHandler={deleteCompletedHandler}
      filterClickAllHandler={filterClickAllHandler}
      filterClickActiveHandler={filterClickActiveHandler}
      filterClickCompletedHandler={filterClickCompletedHandler}
      activeTasksAmount={countActiveTasks}
    />
  );
});

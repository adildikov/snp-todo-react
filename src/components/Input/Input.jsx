import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/actionCreator";

export default function Input(props) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handlePressed = (e) => {
    if (message.length > 0 && e.key === "Enter") {
      dispatch(addTask(new Date().getTime(), message, false));
      setMessage("");
    }
  };

  const handleClick = () => {
    if (message.length > 0) {
      addTask(new Date().getTime(), message, false);
      setMessage("");
    }
  };

  return (
    <div className="main_addTodoArea">
      <input
        type="text"
        value={message}
        className="addTodoArea__newTodo"
        placeholder="Add a new case"
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => handlePressed(e)}
      />
      <button className="addTodoArea__addTodo button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

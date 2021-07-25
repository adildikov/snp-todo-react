import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/actionCreator";

export default function Input(props) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handlePressed = (e) => {
    if (e.key === "Enter") {
      if (message.trim()) {
        dispatch(addTask(new Date().getTime(), message, false));
        setMessage("");
      } else {
        setMessage("");
      }
    }
  };

  const handleClick = () => {
    if (message.trim()) {
      dispatch(addTask(new Date().getTime(), message, false));
      setMessage("");
    } else {
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

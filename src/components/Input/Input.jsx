import React, { useState } from "react";

export default function Input(props) {
  const [message, setMessage] = useState("");

  const handlePressed = (e) => {
    if (e.key === "Enter") {
      console.log(message);
      setMessage("");
    }
  };

  const handleClick = () => {
    console.log(message);
    setMessage("");
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

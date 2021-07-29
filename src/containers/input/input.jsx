import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../components/Input";
import { addTask } from "../../redux/actions/actionCreator";

export default function InputContainer() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handlePressed = useCallback(
    (e) => {
      if (e.key === "Enter") {
        if (message.trim()) {
          dispatch(addTask(new Date().getTime(), message, false));
          setMessage("");
        } else {
          setMessage("");
        }
      }
    },
    [dispatch, message]
  );

  const handleClick = useCallback(() => {
    if (message.trim()) {
      dispatch(addTask(new Date().getTime(), message, false));
      setMessage("");
    } else {
      setMessage("");
    }
  }, [dispatch, message]);

  const handleChange = ({ target: { value } }) => {
    setMessage(value);
  };

  return (
    <Input
      message={message}
      handlePressed={handlePressed}
      handleClick={handleClick}
      handleChange={handleChange}
    />
  );
}

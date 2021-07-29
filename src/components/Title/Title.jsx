import React from "react";

export default React.memo(function Title(props) {
  return (
    <header>
      <h1 className="header__title">{props.title}</h1>
    </header>
  );
});

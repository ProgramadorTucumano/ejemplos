import React from "react";
import "../static/css/button.css";

const Button = ({ name, handleClick, clases }) => {
  return (
    <button
      className={clases ? clases : "clases de mi css"}
      onClick={handleClick}
      style={clases ? {} : { color: "green", width: "100px", minHeight: 50 }}
    >
      {name}
    </button>
  );
};

export default Button;

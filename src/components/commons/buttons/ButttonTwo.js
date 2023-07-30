import React from "react";

const ButtonTwo = ({ title, className, ...props }) => {
  return (
    <button className={`button_two ${className}`} {...props}>
      <p>{title}</p>
    </button>
  );
};

export default ButtonTwo;

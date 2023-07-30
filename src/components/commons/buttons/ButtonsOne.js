import React from "react";

const ButtonOne = ({ title = "", titleStyle, className, ...props }) => {
  return (
    <button className={`button_one ${className}`} {...props}>
      <p style={{ ...titleStyle }}>{title}</p>
    </button>
  );
};

export default ButtonOne;

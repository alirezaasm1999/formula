import React from "react";

const ButtonOne = ({ title="", titleStyle, ...props }) => {
  return (
    <button className="button_one" {...props}>
      <p style={{ ...titleStyle }}>{title}</p>
    </button>
  );
};

export default ButtonOne;

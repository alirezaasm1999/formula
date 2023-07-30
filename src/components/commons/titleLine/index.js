import React from "react";

const TitleLine = ({ title = "" }) => {
  return (
    <div className="title_line">
      <p>{title}</p>
      <div className="title_line__line"></div>
    </div>
  );
};

export default TitleLine;

import React from "react";

const ProgramLabels = ({ type = "Active" }) => {
  return (
    <div
      className={`dashboard__box__program-labels ${
        type === "Active" ? "active" : "deactive"
      }`}
    >
      <p>{type}</p>
    </div>
  );
};

export default ProgramLabels;

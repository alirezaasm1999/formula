import React from "react";
import DIAMOND from "../../../assets/img/diamond.png";
export const HeaderCard = ({ title, img, className = "", diamond = false }) => {
  return (
    <div className={`dashboard__header-card ${className}`}>
      <p>{title}</p>
      <img src={img} alt={title} />
      {diamond ? <img src={DIAMOND} className="diamond" alt="DIAMOND" /> : ""}
    </div>
  );
};

import React from "react";
import { ButtonOne } from "../../../../commons";
import Label from "../../../../commons/Label/Label";
import ProgramLabels from "./ProgramLabels";

const ProgramWrapper = ({ labelTitle, name, type, ...props }) => {
  return (
    <div className="dashboard__box__program-wrapper">
      <div className="section">
        <ButtonOne title="حذف برنامه" />
        <div className="section__rigth-section">
          <p className="name">{name}</p>
          <ProgramLabels type={type} />
        </div>
      </div>
      <Label title={labelTitle} />
    </div>
  );
};

export default ProgramWrapper;

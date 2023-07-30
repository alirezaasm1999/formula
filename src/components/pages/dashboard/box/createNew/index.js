import React from "react";
import { ButtonOne } from "../../../../commons";

export const CreateNew = () => {
  return (
    <div className="dashboard__box__name">
      <div className="dashboard__create-new">
        <ButtonOne title="افزودن برنامه" className="add" />
      </div>
      <p> برنامه جدید </p>
    </div>
  );
};

import React from "react";
import { ButtonOne, Label, TitleLine } from "../../../commons";
import Programs from "./programs/Programs";
import { ProName } from "./title/BoxTitle";

const Box = () => {
  return (
    <div className="dashboard__box">
      <ProName />
      <TitleLine title={"شرایط برنامه ریزی"} />
      <Programs />
    </div>
  );
};

export default Box;

import React from "react";
import { TitleLine } from "../../../commons";
import { ProName } from "./title";

const Box = () => {
  return (
    <div className="dashboard__box">
      <ProName />
      <TitleLine title={"شرایط برنامه ریزی"} />
    </div>
  );
};

export default Box;

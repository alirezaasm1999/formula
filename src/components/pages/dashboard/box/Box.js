import React from "react";
import { TitleLine } from "../../../commons";
import Buttons from "../buttons";
import { CreateNew } from "./createNew";
import Formula from "./formula";
import Programs from "./programs/Programs";
import { ProName } from "./title/BoxTitle";

const Box = () => {
  return (
    <div className="dashboard__box">
      <ProName />
      <TitleLine title={"شرایط برنامه ریزی"} />
      <Programs />
      <CreateNew />
      <TitleLine title={"فرمول نویسی ریاضی"} />
      <Formula />
      <TitleLine title={""} />
      <Buttons/>

    </div>
  );
};

export default Box;

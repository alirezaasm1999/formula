import React from "react";
import ButtonTwo from "../../../commons/buttons/ButttonTwo";

const Buttons = () => {
  return (
    <div className="dashboard__buttons">
      <ButtonTwo className={"non_border"} title={"انصراف"} />

      <ButtonTwo title="ذخیره" />
    </div>
  );
};
export default Buttons;

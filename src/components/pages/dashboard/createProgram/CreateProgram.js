import React from "react";
import LOGO from "../../../../assets/img/create_logo.png";
const CreateProgram = () => {
  return (
    <div className="dashboard__create-program">
      <div>
        <p className="title">ساخت برنامه ورودی</p>
        <p className="description">برنامه خود را بسازید</p>
      </div>
      <img src={LOGO} alt="logo" />
    </div>
  );
};

export default CreateProgram;

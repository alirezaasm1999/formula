import React from "react";
import { Label } from "../../../../commons";
import WARNING from "./../../../../../assets/img/warning.png";
import DELETE from "./../../../../../assets/img/delete.png";
import EQUAL from "./../../../../../assets/img/equal.png";
import FX from "./../../../../../assets/img/fx.png";

const Formula = () => {
  return (
    <div className="dashboard__formula">
      <div className="dashboard__formula__title">
        <img src={WARNING} alt="WARNING" />
        <p>در صورتیکه فرمول نویسی برای باید انجام شود</p>
      </div>
      <div className="dashboard__formula__parent">
        <div className="cloning">
          <div className="drag-wrapper">
            {[...Array(10).keys()].reverse().map((item, index) => {
              return <Label title={item} key={index} />;
            })}
          </div>
          <p className="desc">برنامه </p>
        </div>
        <div className="cloning">
          <div className="drag-wrapper">
            <Label title={"-"} className="purple" />
            <Label title={"+"} className="green" />
            <Label title={"("} className="yellow" />
            <Label title={")"} className="yellow" />
          </div>
          <p className="desc">نماد ها </p>
        </div>
        <div className="cloning">
          <div className="drag-wrapper third">
            <div className="title">
              <p>لطفا فرمول مورد نظر را به روش drag & drop بسازید</p>
              <img src={DELETE} alt="delete" />
            </div>
            <div className="dragable-content">
              <p>fsdfsdfsd</p>
            </div>
            <div className="formula">
              <div>fsdfsdf</div>
              <div>
                <img src={EQUAL} alt="equal" className="equl" />
                <img src={FX} alt="fx" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formula;

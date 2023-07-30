import React from "react";
import ProgramWrapper from "./Wrapper";

const Programs = () => {
  const list = [
    {
      labelTitle: "1",
      name: "برنامه اول",
    },
    {
      labelTitle: "2",
      name: "برنامه اول",
    },
    {
      labelTitle: "3",
      name: "برنامه اول",
    },
    {
      labelTitle: "4",
      name: "برنامه اول",
      type: "DeActive",
    },
    {
      labelTitle: "5",
      name: "برنامه اول",
      type: "DeActive",
    },
  ];
  return (
    <div className="dashboard__box__programs">
      {list.map((item, index) => {
        return <ProgramWrapper {...item} key={index} />;
      })}
    </div>
  );
};

export default Programs;

import React, { useState } from "react";
import { Input } from "../../../../commons";

export const ProName = () => {
  const [title, setTitle] = useState("برنامه شماره 1");
  const onChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="dashboard__box__name">
      <Input value={title} onChange={onChange} />
      <p>نام برنامه </p>
    </div>
  );
};

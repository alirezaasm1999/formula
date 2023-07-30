import React from "react";

const Label = ({ LabelComponent, title="", wrapStyle, titleStyle, ...props }) => {
  return (
    <div className="label" style={{ ...wrapStyle }}>
      {LabelComponent ? <LabelComponent /> : <p style={{ ...titleStyle }}>{title}</p>}
    </div>
  );
};

export default Label;

import React from "react";

const Label = ({
  LabelComponent,
  title = "",
  wrapStyle,
  titleStyle,
  className,
  ...props
}) => {
  return (
    <div className={`label ${className}`} style={{ ...wrapStyle }} {...props}>
      {LabelComponent ? (
        <LabelComponent />
      ) : (
        <p style={{ ...titleStyle }}>{title}</p>
      )}
    </div>
  );
};

export default Label;

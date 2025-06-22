import * as React from "react";

const Label = ({ className, htmlFor, ...props }) => (
  <label
    htmlFor={htmlFor}
    className={`text-sm font-medium text-gray-700 ${className || ""}`}
    {...props}
  />
);

export default  Label ;
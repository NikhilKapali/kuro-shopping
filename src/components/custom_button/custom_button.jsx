import React from "react";

import "./custom_button.scss";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className="custom__button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;

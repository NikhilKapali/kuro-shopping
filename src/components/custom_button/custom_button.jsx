import React from "react";

import "./custom_button.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google__login" : ""} custom__button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;

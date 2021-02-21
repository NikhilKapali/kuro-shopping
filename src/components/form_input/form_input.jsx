import React from "react";

import "./form_input.scss";

function Form_Input({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input
        type="text"
        className="form_input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form_input_label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default Form_Input;

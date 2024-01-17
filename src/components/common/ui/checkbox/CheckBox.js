import React from "react";
import "./checkbox.css";

const CheckBox = ({ name, value, handleChange }) => {
  return (
    <>
      <div className="check_box position-relative">
        <input
          className="styled-checkbox"
          id={value}
          type="checkbox"
          value={value}
          onChange={handleChange}
        />
        <label for={value}>{name}</label>
      </div>
    </>
  );
};

export default CheckBox;

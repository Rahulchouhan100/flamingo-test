import React from "react";
import "./redio.css";

const Redio = ({ handleChange, name, value, type }) => {
  return (
    <>
      <div className="form-group">
        <input
          type={type}
          id={value}
          name={name}
          value={value}
          onChange={handleChange}
        />
        <label for={value}>{value}</label>
      </div>
    </>
  );
};

export default Redio;

import React, { useEffect, useRef, useState } from "react";
import "./CustomCheckbox.css";
const CustomCheckbox = function ({
  name,
  value,
  checkedValues,
  setCheckedValues,
  ...props
}) {
  const [checked, setChecked] = useState(false);
  function toggleChecked() {
    handleChange(!checked); // function uses (!value), because new inversed value will be applied only after a re-render
    setChecked((prev) => !prev);
  }
  function handleChange(checked) {
    if (!setCheckedValues || !checkedValues) return;
    if (checked) setCheckedValues((prev) => (Array.isArray(prev) ? [...prev, value] : [value]));
    if (!checked) setCheckedValues((prev) => prev.filter((el) => el !== value));
  }

  useEffect(() => {
    setChecked(checkedValues.includes(value))
  }, [checkedValues])
  

  return (
    <div
      data-value={value}
      className={`customCheckbox ${checked ? "checked" : ""}`}
      onClick={toggleChecked}
    >
      {name}
      {/* <input
        ref={inputRef}
        type={multiple ? "checkbox" : "radio"}
        name={name}
        checked={checked}
        onChange={() => {
          console.log(1);
          
          handleChange(!checked);
        }}
        {...props}
      /> */}
    </div>
  );
};

export default CustomCheckbox;

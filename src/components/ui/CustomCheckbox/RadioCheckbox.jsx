import React, { useEffect, useRef, useState } from "react";
import "./CustomCheckbox.css";
const RadioCheckbox = function ({
  name,
  value,
  currentCheckedValue,
  setCheckedValue,
  ...props
}) {
  const [checked, setChecked] = useState(false);
  function toggleChecked() {
    handleChange(!checked); // function uses (!value), because new inversed value will be applied only after a re-render
  }
  function handleChange(checked) {
      if (!setCheckedValue) return;
      setCheckedValue(checked ? value : null)
    }
    
    useEffect(() => {
        setChecked(currentCheckedValue === value)
  }, [currentCheckedValue])
  

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

export default RadioCheckbox;

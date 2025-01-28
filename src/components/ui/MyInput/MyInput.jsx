import React, { useRef, useState } from "react";
import cl from "./MyInput.module.css";

const MyInput = ({
  value,
  setValue,
  label,
  type: externalType,
  children,
  showHideBtn,
  className,
  ...props
}) => {
  const [type, setType] = useState(externalType || "text");
  const inputRef = useRef(null);
  function handleChange(e) {
    if (setValue) setValue(e.target.value);
  }
  function toggleType() {
    setType((prev) => (prev === "password" ? "text" : "password"));
    // if(inputRef.current) inputRef.current.setAttribute("type", type)
  }

  return (
    <div
      className={`${cl.myInputContainer} ${label ? cl.labelVisible : ""}`}
      data-label={label}
    >
      <input
        ref={inputRef}
        onChange={handleChange}
        type={type}
        className={`${cl.myInput} ${className || ""}`}
        value={value ?? ""}
        {...props}
      />
      {children}
      {showHideBtn ? (
        <button type="button" className={cl.showHideBtn} onClick={toggleType}>
          <i
            className={`fa ${type === "password" ? "fa-eye-slash" : "fa-eye"}`}
          ></i>
        </button>
      ) : null}
    </div>
  );
};

export default MyInput;

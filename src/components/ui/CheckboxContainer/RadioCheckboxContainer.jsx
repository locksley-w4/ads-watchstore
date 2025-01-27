import React, { useContext, useEffect, useRef, useState } from "react";
import "./CheckboxContainer.css";
import { ProductsContext } from "../../../context/context";
import RadioCheckbox from "../CustomCheckbox/RadioCheckbox";

const RadioCheckboxContainer = ({
  options = [],
  checkedValue = null,
  setCheckedValue,
  ...props
}) => {
  
  return (
    <div className="checkboxContainer" {...props}>
      {options.length &&
        options.map((elem, i) => (
          <RadioCheckbox
            name={elem.name}
            value={elem.value}
            key={i}
            currentCheckedValue={checkedValue}
            setCheckedValue={setCheckedValue}
          />
        ))}
    </div>
  );
};

export default RadioCheckboxContainer;

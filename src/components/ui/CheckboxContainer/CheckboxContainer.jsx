import React, { useContext, useEffect, useRef, useState } from "react";
import "./CheckboxContainer.css";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import { ProductsContext } from "../../../context/context";

const CheckboxContainer = ({
  options = [],
  checkedValues = [],
  setCheckedValues,
  ...props
}) => {
  return (
    <div className="checkboxContainer" {...props}>
      {options.length &&
        options.map((elem, i) => (
          <CustomCheckbox
            name={elem.name}
            value={elem.value}
            key={i}
            checkedValues={checkedValues}
            setCheckedValues={setCheckedValues}
          />
        ))}
    </div>
  );
};

export default CheckboxContainer;

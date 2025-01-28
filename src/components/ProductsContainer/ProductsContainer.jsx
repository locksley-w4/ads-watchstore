import React from "react";
import "./ProductsContainer.css";

const ProductsContainer = ({className, ...props}) => {
  return (
    <div className={`productsContainer ${className || ""}`} {...props}>
      {props.children}
    </div>
  );
};

export default ProductsContainer;

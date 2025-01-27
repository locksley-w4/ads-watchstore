import React, { useState } from "react";
import "./SimilarProducts.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import ProductsContainer from "../ProductsContainer/ProductsContainer";
import { useSimilarProducts } from "../../utils/utils";
import Product from "../Product/Product";

const SimilarProducts = ({ keywords, productId, ...props }) => {
  const similar = useSimilarProducts(productId, keywords);

  if (!similar) {
    return <div>No similar products!</div>
  }
  return (
    <div className="similar-products" {...props}>
      <SectionHeader seeAllLink="./">Similar Products</SectionHeader>
      <ProductsContainer>
        {similar.length &&
          similar.map((product, index) => (
            <Product key={index} product={product} />
          ))}
      </ProductsContainer>
    </div>
  );
};

export default SimilarProducts;

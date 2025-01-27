import React, { useContext, useEffect, useState } from "react";
import "./FeaturedProducts.css";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import ProductsContainer from "../../../components/ProductsContainer/ProductsContainer";
import { ProductsContext } from "../../../context/context";
import Product from "../../../components/Product/Product";

const FeaturedProducts = () => {
  const { totalProducts } = useContext(ProductsContext);
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    setFeatured(totalProducts.slice(0, 10));
  }, [totalProducts]);

  return (
    <div className="homepage-featured">
      <SectionHeader>Featured Products</SectionHeader>
      <ProductsContainer>
        {featured.length &&
          featured.map((product, index) => <Product key={index} product={product} />)}
      </ProductsContainer>
    </div>
  );
};

export default FeaturedProducts;

import React, { useContext, useEffect, useState } from "react";
import "./CategoryProducts.css";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../../context/context";
import { getProductsByKeyword } from "../../../utils/utils";
import Product from "../../../components/Product/Product";
import SliderList from "../../../components/ui/SliderList/SliderList";

const CategoryProducts = ({ ...props }) => {
  const [productCategory, setCategory] = useState(null);
  const { category: selectedCategory } = useParams();
  useEffect(() => {
    setCategory(selectedCategory);
  }, [selectedCategory]);
  
  const { totalProducts } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    if (totalProducts) {
      let filtered = getProductsByKeyword(totalProducts, productCategory ?? "trending");
      setFilteredProducts(filtered);
    }
  }, [totalProducts, productCategory]);

  return (
    <div className="categoryProducts">
      <SliderList className="productsContainer">
        {filteredProducts.length &&
          filteredProducts.map((product, index) => (
            <li className="product" key={index}>
              <Product product={product} />
            </li>
          ))}
      </SliderList>
    </div>
  );
};

export default CategoryProducts;

import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

const Product = ({ product, ...props }) => {
  const navigate = useNavigate();
  function referToProductPage() {
    navigate(`/product/${product.id}`)
    window.scrollTo({top: 0, behavior: "smooth"})
  }
  if (!product) {
    return <h2>Product Loading..</h2>;
  }
  return (
    <div className="product" {...props} onClick={referToProductPage}>
      <div className="product-image">
        <img src={product?.imageUrl} alt="" />
      </div>
      <h4>{product?.name}</h4>
      <h3 className="price">$ {product?.price}</h3>
      <button className="add-to-cart-btn">+</button>
    </div>
  );
};

export default Product;

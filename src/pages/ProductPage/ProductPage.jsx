import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../utils/utils";
import "./ProductPage.css";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import PageHeader from "../../components/PageHeader/PageHeader";
import BuyCounter from "../../components/ui/BuyCounter/BuyCounter";
// import { UserContext } from "../../context/UserContextProvider";

const ProductPage = () => {
  const { productId} = useParams();
  const product = useProduct(productId);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current?.clientHeight <= 350) {
      descriptionRef.current?.classList.add("active");
    } else {
      descriptionRef.current?.classList.remove("active");
    }
  }, [descriptionRef.current]);

  function toggleDescription(e) {
    if (descriptionRef.current) {
      descriptionRef.current.classList.toggle("active");
    }
  }
  if (!product) {
    return <div>Loading..</div>;
  }

  return (
    <div className="product-page">
      <PageHeader>
        <h2>{product?.shortName}</h2>
        <button>
          <i className="fa fa-bag-shopping"></i>
        </button>
      </PageHeader>
      <div className="product-image">
        <img src={product?.imageUrl} alt={`${product?.name} - image`} />
      </div>
      <div className="main-info">
        <h2 className="name">{product?.name}</h2>
        <h3 className="price">$ {product?.price}</h3>
      </div>
      <BuyCounter productId={productId} />

      <table className="details">
        <tbody>
          <tr>
            <td>Case Diameter</td>
            <td>{product.caseDiameter}</td>
          </tr>
          <tr>
            <td>Water Resistance</td>
            <td>{product.waterResistance}</td>
          </tr>
          <tr>
            <td>Strap color</td>
            <td>{product.strapColor}</td>
          </tr>
          <tr>
            <td>Strap Material</td>
            <td>{product.strapMaterial}</td>
          </tr>
        </tbody>
      </table>
      <div className="description" ref={descriptionRef}>
        {product?.description ?? "This product does not have a description."}
        <button onClick={toggleDescription} className="showDescription">
          <i className="fa fa-chevron-down"></i>
        </button>
      </div>

      <SimilarProducts keywords={product?.keywords} productId={product?.id} />
    </div>
  );
};

export default ProductPage;

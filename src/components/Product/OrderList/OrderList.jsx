import React, { useContext, useEffect, useState } from "react";
import { useProducts } from "../../../utils/utils";
import { UserContext } from "../../../context/UserContextProvider";
import BuyCounter from "../../ui/BuyCounter/BuyCounter";
import { useNavigate } from "react-router-dom";

const OrderList = () => {
  const { cart } = useContext(UserContext);
  const [productIDs, setProductsIDs] = useState([]);
  const products = useProducts(productIDs);
  const navigate = useNavigate()

  useEffect(() => {
    if (cart) setProductsIDs(Object.keys(cart.orders || {}));
  }, [cart]);

  return (
    <ul className="orders-list">
      {productIDs.length ? (
        productIDs.map((id, index) => {
          if (!cart.orders[id]) return null;
          const product = products[id];
          if (!product)
            return (
              <li key={id}>
                <p>Unable to load product info</p>
              </li>
            );
          return (
            <li className="order-card" key={id} onClick={() => {navigate(`/product/${id}`)}}>
              <div className="logo">
                <img src={product?.imageUrl} alt="Product Image" />
              </div>
              <h2 className="name">{product?.shortName}</h2>
              <p className="description">{product?.description}</p>
              <h3 className="price">$ {product?.price}</h3>
              <BuyCounter
                vertical={true}
                buyCount={cart.orders[id]}
                productId={id}
                stopPropagation={true}
              />
            </li>
          );
        })
      ) : (
        <li key={0}>
          <p>
            No products added yet. Explore and add desired products to your
            cart.
          </p>
        </li>
      )}
    </ul>
  );
};

export default OrderList;

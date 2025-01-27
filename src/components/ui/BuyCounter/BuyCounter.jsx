import React, { useContext, useEffect, useState } from "react";
import "./BuyCounter.css";
import { UserContext } from "../../../context/UserContextProvider";
const BuyCounter = ({ vertical, productId, stopPropagation = false,...props }) => {
  const [buyCount, setBuyCount] = useState(0);
  const {
    cart,
    setCart,
  } = useContext(UserContext);

  useEffect(() => {
    const productCounter = cart?.orders?.[productId] || 0;
    setBuyCount(productCounter);
  }, [cart?.orders?.[productId]]);

  function decrementCounter() {
    if (buyCount <= 0) {
      return;
    }
    setCart((prev) => {
      let currentVal = prev?.orders[productId];
      const newVal = currentVal > 0 ? currentVal - 1 : 0;
      const newOrders = {...prev.orders, [productId]: newVal};
      return {...prev, orders: newOrders};
    });
  }
  function incrementCounter() {
    // if (setBuyCount) setBuyCount((prev) => prev + 1);
    // console.log(cart);
    setCart((prev) => {
      let currentVal = prev?.orders[productId];
      const newVal = currentVal ? currentVal + 1 : 1;
      const newOrders = {...prev.orders, [productId]: newVal};
      return {...prev, orders: newOrders};
    });
  }
  return (
    <div className={`buyCounter ${vertical ? "vertical" : ""}`} onClick={stopPropagation ? e => e.stopPropagation() : null}>
      <button onClick={decrementCounter} className="substract">
        -
      </button>
      <span className="counterValue">{buyCount}</span>
      <button onClick={incrementCounter} className="add">
        +
      </button>
    </div>
  );
};

export default BuyCounter;

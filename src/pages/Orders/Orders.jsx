import React, { useContext, useEffect, useMemo, useState } from "react";
import "./Orders.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import { UserContext } from "../../context/UserContextProvider";
import OrderList from "../../components/Product/OrderList/OrderList";
import { ProductsContext } from "../../context/context";

const Orders = () => {
  const { productPrices } = useContext(ProductsContext);

  const { cart, clearCart } = useContext(UserContext);
  const [discount, setDiscount] = useState(0.25);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (cart?.orders && cart?.orders)
      setTotalPrice(cart.calculateTotal(cart.orders, productPrices));
  }, [cart.orders, productPrices]);

  return (
    <div className="orders-page">
      <PageHeader>
        <h2>My Orders</h2>
        <button type="button" onClick={clearCart}>
          <i className="fa fa-close" />
        </button>
      </PageHeader>

      <OrderList />

      <div className="prices">
        <div className="prices__row">
          <h4>Item Total</h4>
          <h4>${totalPrice}</h4>
        </div>
        <div className="prices__row">
          <h4>Discount ({discount * 100}%)</h4>
          <h4>${totalPrice * discount}</h4>
        </div>
        <div className="prices__row free">
          <h4>Delivery fee</h4>
          <h4>Free</h4>
        </div>
        <div className="prices__footer">
          <h4>Grand Total</h4>
          <h4>${totalPrice * (1 - discount)}</h4>
        </div>
      </div>
      <button
        className="myBtn orderBtn"
        onClick={() =>
          alert(
            "Unfortunately, our shops are closed at this time. Please try again later."
          )
        }
      >
        Place order
      </button>
    </div>
  );
};

export default Orders;

import React, { useContext, useEffect, useMemo, useState } from "react";
import "./Orders.css";
import { useProduct, useProducts } from "../../utils/utils";
import { productKeywords } from "../../components/assets/productsData";
import BuyCounter from "../../components/ui/BuyCounter/BuyCounter";
import PageHeader from "../../components/PageHeader/PageHeader";
import { UserContext } from "../../context/UserContextProvider";
import OrderList from "../../components/Product/OrderList/OrderList";

const Orders = () => {
  const { cart, clearCart } = useContext(UserContext);
  const [discount, setDiscount] = useState(0.25);

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
          <h4>${cart && cart?.calculateTotal()}</h4>
        </div>
        <div className="prices__row">
          <h4>Discount ({discount * 100}%)</h4>
          <h4>${cart && cart?.calculateTotal() * discount}</h4>
        </div>
        <div className="prices__row free">
          <h4>Delivery fee</h4>
          <h4>Free</h4>
        </div>
        <div className="prices__footer">
          <h4>Grand Total</h4>
          <h4>${cart && cart?.calculateTotal(discount)}</h4>
        </div>
      </div>
      <button className="myBtn orderBtn" onClick={() => alert("Unfortunately, our shops are closed at this time. Please try again later.")}>Place order</button>
    </div>
  );
};

export default Orders;

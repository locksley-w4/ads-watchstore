import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useState,
} from "react";
import { AuthContext } from "./AuthContextProvider";
import { compareObjects } from "../utils/utils";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const { isAuth, userId } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [cart, setCart] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userDataError, setUserDataError] = useState(null);

  useEffect(() => {
    if (!isAuth) {
      setUserData({});
      setCart(new Cart());
      return;
    }

    (async () => {
      setIsLoading(true);
      setUserDataError(null);
      try {
        const data = await getUserData(userId);
        setCart(new Cart(data?.cart || {}));
        setUserData(data);
        setIsLoading(false);
      } catch (error) {
        setUserDataError(error);
        setIsLoading(false);
      }

    })();
  }, [isAuth, userId]);

  useEffect(() => {
    if (cart?.orders && userData.cart) handleCartUpdate(cart);
  }, [cart]);

  useEffect(() => {
    if (!userData.cart || !cart.orders || isLoading) return;

    if (!compareObjects(userData?.cart, cart?.orders))
      setCart(new Cart(userData.cart));
  }, [userData]);

  // function incrementProduct(productId) {
  //   cart.incrementProduct(productId);
  //   setCart(cart);
  // }
  // function decrementProduct(productId) {
  //   cart.decrementProduct(productId);
  //   setCart(cart);
  // }
  function clearCart() {
    setCart(new Cart({}));
  }

  async function handleCartUpdate(updatedCart) {
    // setCart(newCart);
    await updateUserData(userId, { cart: updatedCart?.orders });
    setUserData(await getUserData(userId)); // synchronising
  }

  async function getUserData(id) {
    const users = localStorage.getItem("usersData");
    const userData = JSON.parse(users || "{}")[id];
    return userData;
  }

  async function updateUserData(id, newData = {}) {
    if (!id) return false;
    const users = JSON.parse(localStorage.getItem("usersData") || "{}");
    const oldUserData = users[id];
    const newUserData = { ...oldUserData, ...newData };
    users[id] = newUserData;
    localStorage.setItem("usersData", JSON.stringify(users));
    return true;
  }

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        cart,
        setCart,
        updateUserData,
        clearCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

class Cart {
  constructor(ordersObj = {}) {
    this._orders = ordersObj;
    this.calculateTotal = this.calculateTotal.bind(this);
  }
  get orders() {
    return { ...this._orders };
  }
  set orders(val) {
    this._orders = { ...val } || {};
  }
  calculateTotal(discount = 0) {
    let total = 0;
    for (const price of Object.values(this._orders)) {
      total += price;
    }
    return total * (1 - discount);
  }
}

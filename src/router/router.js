import React, { useContext, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryProducts from "../pages/Homepage/CategoryProducts/CategoryProducts";
import Homepage from "../pages/Homepage/Homepage";
import Main from "../pages/Main/Main";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Profile from "../pages/Profile/Profile";
import Search from "../pages/Search/Search";
import Orders from "../pages/Orders/Orders";
import ProductPage from "../pages/ProductPage/ProductPage";
import { path } from "animejs";
import Filter from "../pages/Filter/Filter";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import { AuthContext } from "../context/AuthContextProvider";
import AuthAccess from "../components/AuthAccess/AuthAccess";

export const privateRoutes = [
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        children: [
          {
            path: "/",
            element: <CategoryProducts />,
          },
          {
            path: "/c/:category",
            element: <CategoryProducts />,
          },
        ],
      },
      {
        path: "/filter",
        element: <Filter />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/product/:productId",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export const publicRoutes = [
  {
    path: "*",
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        children: [
          {
            path: "/",
            element: <CategoryProducts />,
          },
          {
            path: "/c/:category",
            element: <CategoryProducts />,
          },
        ],
      },
      {
        path: "/filter",
        element: <Filter />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/orders",
        element: (
          <AuthAccess>
            <Orders />,
          </AuthAccess>
        ),
      },
      {
        path: "/profile",
        element: (
          <AuthAccess>
            <Profile />,
          </AuthAccess>
        ),
      },
      {
        path: "/product/:productId",
        element: <ProductPage />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <NotFoundPage />,
  // },
];

const AppRouterProvider = () => {
  const { isAuth } = useContext(AuthContext);
  const router = createBrowserRouter(isAuth ? privateRoutes : publicRoutes);

  return <RouterProvider router={router} />;
};

export default AppRouterProvider;

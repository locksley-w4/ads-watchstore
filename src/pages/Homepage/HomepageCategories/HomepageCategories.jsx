import React, { useEffect, useRef } from "react";
import "./HomepageCategories.css";
import SliderList from "../../../components/ui/SliderList/SliderList";
import { Link, NavLink, Outlet } from "react-router-dom";

const HomepageCategories = () => {
  return (
    <div className="homepageCategories">
      <SliderList className="categories">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Trending
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/c/popular"
          >
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/c/new"
          >
            New
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/c/bestCollection"
          >
            Best Collection
          </NavLink>
        </li>
      </SliderList>
      <Outlet />
    </div>
  );
};

export default HomepageCategories;

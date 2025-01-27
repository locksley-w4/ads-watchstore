import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import homeIcon from "../assets/Home.png";
import searchIcon from "../assets/Search.png";
import ordersIcon from "../assets/Shopping Bag.png";
import profileIcon from "../assets/User.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-elem">
          <NavLink to={"/"} className={({ isActive }) => (isActive ? "active" : "")}>
            <img src={homeIcon} alt="home" />
          </NavLink>
        </li>
        <li className="nav-elem">
          <NavLink to={"/search"} className={({ isActive }) => (isActive ? "active" : "")}>
            <img src={searchIcon} alt="search" />
          </NavLink>
        </li>
        <li className="nav-elem">
          <NavLink to={"/orders"} className={({ isActive }) => (isActive ? "active" : "")}>
            <img src={ordersIcon} alt="shop" />
          </NavLink>
        </li>
        <li className="nav-elem">
          <NavLink to={"/profile"} className={({ isActive }) => (isActive ? "active" : "")}>
            <img src={profileIcon} alt="profile" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./HomepageHeader.css";
import headerLogo from "../../../components/assets/Full_Logo.png"
import filterLogo from "../../../components/assets/filter.png"
import { Link } from "react-router-dom";

const HomepageHeader = ({setSidebarVisible}) => {
  function showSidebar() {
    setSidebarVisible(true)
  }
  return (
    <header className="homepageHeader">
      <button className="sidebarBtn active" onClick={showSidebar}>
        <i className="fa fa-bars fa-2x"></i>
      </button>
      <div className="logo-container"><img src={headerLogo} alt="" /></div>
      <Link to={'./filter'} className="filter">
        <img src={filterLogo} alt="filter" />
      </Link>
      
    </header>
  );
};

export default HomepageHeader;

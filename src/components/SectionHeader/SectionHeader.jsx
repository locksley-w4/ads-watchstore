import React from "react";
import "./SectionHeader.css";
import { Link } from "react-router-dom";

const SectionHeader = ({ children, seeAllLink = "./", ...props }) => {
  return (
    <h3 {...props} className="sectionHeader">
      {children}
      <Link to={seeAllLink}>See all</Link>
    </h3>
  );
};

export default SectionHeader;

import React from "react";
import cl from "./PageHeader.module.css";
import { useNavigate } from "react-router-dom";

const PageHeader = (props) => {
  const navigate = useNavigate();
  function referBack() {
    navigate(-1);
  }
  return (
    <header
      className={`${cl.pageHeader} ${props.sidePadding ? cl.sidePadding : ""} ${
        props.className ?? ""
      }}`}
    >
      <button className={cl.backBtn} onClick={referBack}>
        <i className="fa  fa-chevron-left"></i>
      </button>
      {props.children}
    </header>
  );
};

export default PageHeader;

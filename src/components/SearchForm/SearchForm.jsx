import React, { useEffect } from "react";
import MyInput from "../ui/MyInput/MyInput";
import "./SearchForm.css";

const SearchForm = ({ value, setValue, onSubmit, ...props }) => {  
  return (
    <form action="#" className="searchForm" onSubmit={onSubmit}>
      <button type="submit" disabled={!value}>
        <i className="fa fa-search"></i>
      </button>
      <MyInput value={value} setValue={setValue} />
      <button
        type="button"
        className={`clear ${value ? "active" : ""}`}
        onClick={(e) => {
          setValue("");
        }}
      >
        <i className="fa fa-close" />
      </button>
    </form>
  );
};

export default SearchForm;

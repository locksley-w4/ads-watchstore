import React, { useContext, useEffect, useState } from "react";
import CheckboxContainer from "../../components/ui/CheckboxContainer/CheckboxContainer";
import { ProductsContext } from "../../context/context";
import RadioCheckboxContainer from "../../components/ui/CheckboxContainer/RadioCheckboxContainer";

const FilterForm = ({
  formVisible,
  setFormVisible,
  query,
  setQuery,
  ...props
}) => {
  const { productKeywords } = useContext(ProductsContext);
  const sortOptions = [
    { name: "By name", value: "byName" },
    { name: "By Price", value: "byPrice" },
  ];

  const [categories, setCategories] = useState([]);
  const [sortType, setSortType] = useState(""); // "name" or "price"

  useEffect(() => {
    if(query) {
      setCategories(query.categories)
      setSortType(query.sortType)
    }
  }, [query])
  

  function showFilteredAndSorted(e) {
    e.preventDefault();
    setQuery({categories, sortType})
    setFormVisible(false);
  }
  return (
    <div className={`filterForm ${formVisible ? "active" : ""}`} {...props}>
      <form id="filterForm">
        <h2>Select Categories</h2>
        <CheckboxContainer
          options={productKeywords}
          checkedValues={categories}
          setCheckedValues={setCategories}
        />
        <h2>Sort by</h2>
        <RadioCheckboxContainer
          options={sortOptions}
          checkedValue={sortType}
          setCheckedValue={setSortType}
        />
        <button className="filter-btn" onClick={showFilteredAndSorted}>
          APPLY
        </button>
      </form>
    </div>
  );
};

export default FilterForm;

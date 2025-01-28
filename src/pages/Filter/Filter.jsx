import React, { useContext, useEffect, useState } from "react";
import "./Filter.css";
import FilterForm from "./FilterForm";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import PageHeader from "../../components/PageHeader/PageHeader";
import { getFilteredProducts, getSortedProducts } from "../../utils/utils";
import { ProductsContext } from "../../context/context";
import Product from "../../components/Product/Product";

const Filter = (props) => {
  const [query, setQuery] = useState({name: "", categories: []});
  const [formVisible, setFormVisible] = useState(true);
  const [filteredAndSorted, setFilteredAndSorted] = useState([]);
  const { totalProducts } = useContext(ProductsContext);

  function showFilteredAndSorted() {
    const filtered = getFilteredProducts(query.categories, totalProducts);
    setFilteredAndSorted(getSortedProducts(query.sortType, filtered));
  }
  useEffect(() => {
    if (!formVisible) showFilteredAndSorted();
  }, [formVisible]);

  function clear() {
    const userConfirm = window.confirm("Do you want to reset filter?");
    if (userConfirm) setQuery({name: "", categories: []});
  }
  return (
    <div className="filterPage" {...props}>
      <PageHeader>
        <h2>Filter</h2>
        <button onClick={clear}>
          <i className="fa fa-close"></i>
        </button>
      </PageHeader>
      <FilterForm
        formVisible={formVisible}
        setFormVisible={setFormVisible}
        query={query}
        setQuery={setQuery}
      />
      <button className="filter-btn" onClick={() => {setFormVisible(true)}}>Show Form</button>
      <ProductsContainer className={formVisible ? "collapsed" : ""}>
        {(filteredAndSorted.length ? filteredAndSorted : totalProducts).map(
          (elem, i) => (
            <Product product={elem} key={i} />
          )
        )}
      </ProductsContainer>
    </div>
  );
};

export default Filter;

import React, { useContext, useState } from "react";
import "./Search.css";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import Product from "../../components/Product/Product";
import { ProductsContext } from "../../context/context";
import { searchByName } from "../../utils/utils";
import SearchForm from "../../components/SearchForm/SearchForm";

const Search = () => {
  const [name, setName] = useState("");
  const [result, setResult] = useState([]);
  const { totalProducts } = useContext(ProductsContext);

  function handleSubmit(e) {
    e.preventDefault();
    setResult(searchByName(name, totalProducts));
  }

  return (
    <div className="search-page">
      <SearchForm onSubmit={handleSubmit} value={name} setValue={setName} />
      {result.length ? (
        <ProductsContainer>
          {result.map((elem, i) => (
            <Product product={elem} key={i} />
          ))}
        </ProductsContainer>
      ) : (
        <h2>No products</h2>
      )}
    </div>
  );
};

export default Search;

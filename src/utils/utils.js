import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/context";
import { createMemorySessionStorage } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";

export function getProductsByKeyword(products, keyword) {
  return products.filter((product) => product.keywords?.includes(keyword));
}

export function useProduct(id) {
  // finds product by its ID
  const [product, setProduct] = useState(null);
  const { totalProducts } = useContext(ProductsContext);
  useEffect(() => {
    setProduct(
      totalProducts ? totalProducts.find((el) => el.id === +id) : null
    );
  }, [id, totalProducts]);
  return product;
}

export function useProducts(arr = []) {
  const [products, setProducts] = useState({});
  const { totalProducts = [] } = useContext(ProductsContext);

  useEffect(() => {
    if (!arr.length || !totalProducts.length) {
      setProducts((prev) => (compareObjects(prev, {}) ? prev : {}));
      return;
    }
    const res = {};
    arr.forEach((id) => {
      res[id] = totalProducts
        ? totalProducts.find((el) => el.id === +id)
        : null;
    });
    setProducts((prev) => (compareObjects(prev, res) ? prev : res));
  }, [arr, totalProducts]);
  return products;
}

export function useSimilarProducts(id, keywords = []) {
  // finds similar products, using product keywords
  const [similar, setSimilar] = useState(null);
  const { totalProducts } = useContext(ProductsContext);
  useEffect(() => {
    const matchList = totalProducts.map((product) => {
      let matches = 0;
      product.keywords.forEach((keyword) => {
        if (keywords.includes(keyword)) matches++;
      });
      return { product, matches };
    });
    let filtered = matchList.filter(
      (elem) => elem.matches > 0 && elem.product.id !== id
    );
    filtered.sort((a, b) => b.matches - a.matches);
    Array.prototype.pop();
    setSimilar(filtered.map((el) => el.product));
  }, [totalProducts, keywords]);
  return similar;
}

export function binarySearch(elem, arr) {
  if (arr.length <= 1) return elem === arr[0];
  let mid = Math.floor(arr.length / 2);
  if (elem === arr[mid]) return true;
  if (elem < arr[mid]) return binarySearch(elem, arr.slice(0, mid));
  if (elem > arr[mid]) return binarySearch(elem, arr.slice(mid));
}
export function getFilteredProducts(categories = [], totalProducts = []) {
  if (categories.length <= 0) return totalProducts;

  const res = totalProducts.filter((product) => {
    for (const elem of categories) {
      if (product.keywords.includes(elem)) {
        return true;
      }
    }
  });
  return res;
}
export function getSortedProducts(sortBy, products = []) {
  if (!sortBy) return products;
  if (sortBy === "byName")
    return products.sort((a, b) => (a.name >= b.name ? 1 : -1));
  if (sortBy === "byPrice") return products.sort((a, b) => a.price - b.price);
}

export function searchByName(name, products) {
  return products.filter((el) =>
    el.name.toLowerCase().includes(name.toLowerCase().trim())
  );
}


export function compareObjects(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false;

  for (const key in a) {
    if (Object.prototype.hasOwnProperty.call(a, key) && a[key] !== b[key])
      return false;
  }
  return true;
}

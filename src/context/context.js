import { createContext } from "react";
import { products, productKeywords, productPrices } from "../components/assets/productsData";

export const productContextValue = { totalProducts: products, productKeywords,productPrices };
export const ProductsContext = createContext(null);

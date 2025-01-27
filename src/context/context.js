import { createContext } from "react";
import { products, productKeywords } from "../components/assets/productsData";

export const productContextValue = { totalProducts: products, productKeywords };
export const ProductsContext = createContext(null);

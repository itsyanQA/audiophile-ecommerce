import { Product } from "@customTypes/types";
import { createContext, useContext } from "react";

export const ProductPageContext = createContext<Product | null>(null);

export const useProductPageContext = () => {
  const context = useContext(ProductPageContext);

  if (!context) {
    throw new Error("Component must be wrapped inside ProductPageProvider");
  }

  return context;
};

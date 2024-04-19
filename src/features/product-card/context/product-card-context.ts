import { Product } from "@customTypes/types";
import { createContext, useContext } from "react";

export const ProductCardContext = createContext<Product | null>(null);

export const useProductCardContext = () => {
  const context = useContext(ProductCardContext);

  if (!context) {
    throw new Error(
      "ProductCard* components must be wrapped inside product card provider"
    );
  }

  return context;
};

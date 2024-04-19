import { ReactNode } from "react";
import { ProductPageContext } from "@features/product-page";
import { getProductById } from "src/utils/product-finder";

type ProductPageProviderProps = {
  children: ReactNode;
};

export function ProductPageProvider({ children }: ProductPageProviderProps) {
  return <ProductPageContext.Provider value={getProductById()}>{children}</ProductPageContext.Provider>;
}

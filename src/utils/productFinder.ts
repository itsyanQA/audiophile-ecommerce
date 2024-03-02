import { Product } from "@customTypes/types";
import products from "../data/data.json";

export const getProductById = (): Product => {
  const productId = window.location.pathname
    .split("/")
    .pop() as unknown as number;

  return products.find((product: Product) => product.id === +productId)!;
};

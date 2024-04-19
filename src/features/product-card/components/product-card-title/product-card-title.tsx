import { useProductCardContext } from "@features/product-card";
import "./product-card-title.scss";
import { isPage } from "src/utils/page";

export function ProductCardTitle() {
  const product = useProductCardContext();
  const isProductPage = isPage("/product");

  return (
    product.name && <h1 className={`product-card-title ${isProductPage ? "product-card-title--is-product-page" : ""}`}>{product.name}</h1>
  );
}

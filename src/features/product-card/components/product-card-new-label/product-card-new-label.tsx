import { useProductCardContext } from "@features/product-card";
import "./product-card-new-label.scss";
import { isPage } from "src/utils/page";

export function ProductCardNewLabel() {
  const product = useProductCardContext();
  const isProductPage = isPage("/product");

  return (
    product.new && (
      <span className={`product-card-new-label ${isProductPage ? "product-card-new-label--is-product-page" : ""}`}>new product</span>
    )
  );
}

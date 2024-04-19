import { useProductCardContext } from "@features/product-card";
import "./product-card-description.scss";
import { isPage } from "src/utils/page";

export function ProductCardDescription() {
  const product = useProductCardContext();
  const isProductPage = isPage("/product");

  return (
    product.description && (
      <p className={`product-card-description ${isProductPage ? "product-card-description--is-product-page" : ""}`}>
        {product.description}
      </p>
    )
  );
}

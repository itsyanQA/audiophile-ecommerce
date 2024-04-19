import { useProductCardContext } from "@features/product-card";
import "./product-card-price.scss";

export function ProductCardPrice() {
  const product = useProductCardContext();
  const isProductPage = window.location.pathname.includes("product");

  return product.price && isProductPage && <span className="product-card-price">$ {product.price.toLocaleString()}</span>;
}

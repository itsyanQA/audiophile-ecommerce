import { isPage } from "src/utils/page";
import { ProductCardPrice } from "..";
import { ProductCardButton } from "../product-card-button";
import { ProductCardDescription } from "../product-card-description";
import { ProductCardNewLabel } from "../product-card-new-label";
import { ProductCardTitle } from "../product-card-title";
import "./product-card-info.scss";

export function ProductCardInfo() {
  const isProductPage = isPage("/product");

  return (
    <div className={`product-card-info ${isProductPage ? "product-card-info--is-product-page" : ""}`}>
      <div className="product-card-info__titles">
        <ProductCardNewLabel />
        <ProductCardTitle />
      </div>
      <ProductCardDescription />
      <ProductCardPrice />
      <ProductCardButton />
    </div>
  );
}

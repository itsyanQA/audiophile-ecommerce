import "./product-card.scss";
import { Product } from "@customTypes/types";
import { ProductCardContext, ProductCardInfo } from "@features/product-card";
import { useDeviceEvaluator } from "@hooks/use-device-evaluator";
import { isPage } from "src/utils/page";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const device = useDeviceEvaluator();
  const isProductPage = isPage("/product");

  return (
    <ProductCardContext.Provider value={product}>
      <div className={`product-card ${isProductPage ? "product-card--is-product-page" : ""}`}>
        <picture>
          <img src={product?.image[device]} alt={`${product?.name}`} />
        </picture>
        <ProductCardInfo />
      </div>
    </ProductCardContext.Provider>
  );
}

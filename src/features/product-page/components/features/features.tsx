import { useProductPageContext } from "@features/product-page";
import "./features.scss";

export function Features() {
  const product = useProductPageContext();

  return (
    <div className="features">
      <h3>features</h3>
      <p className="features__text">{product.features}</p>
    </div>
  );
}

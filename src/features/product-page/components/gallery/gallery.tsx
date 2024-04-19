import { useProductPageContext } from "@features/product-page";
import { useDeviceEvaluator } from "@hooks/use-device-evaluator";
import "./gallery.scss";

export function Gallery() {
  const product = useProductPageContext();
  const device = useDeviceEvaluator();

  return (
    <div className="gallery">
      <div className="gallery__left">
        <img src={product.gallery.first[device]} alt={product.name} />
        <img src={product.gallery.second[device]} alt={product.name} />
      </div>

      <img src={product.gallery.third[device]} alt={product.name} />
    </div>
  );
}

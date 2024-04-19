import "./upsell.scss";
import { useProductPageContext } from "@features/product-page";
import { UpsellCard } from "../upsell-card";
import products from "../../../../data/data.json";
import { useDeviceEvaluator } from "@hooks/use-device-evaluator";

export function Upsell() {
  const product = useProductPageContext();
  const device = useDeviceEvaluator();

  return (
    <div className="upsell">
      <h3>you may also like</h3>
      <div className="upsell__cards">
        {product.others.map((upsellItem, index) => (
          <UpsellCard
            name={upsellItem.name}
            image={upsellItem.image[device]}
            id={products?.find((productData) => productData.slug === product.others[index].slug)?.id as number}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

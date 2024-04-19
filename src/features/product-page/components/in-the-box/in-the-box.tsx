import { IncludedItem, useProductPageContext } from "@features/product-page";
import "./in-the-box.scss";

export function InTheBox() {
  const product = useProductPageContext();

  return (
    <div className="in-the-box">
      <h3>in the box</h3>
      <ul className="in-the-box__items">
        {product.includes.map((includedItem, index) => (
          <IncludedItem item={includedItem} key={index} />
        ))}
      </ul>
    </div>
  );
}

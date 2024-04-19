import { IncludedItem as IncludedItemType } from "@customTypes/types";
import "./included-item.scss";

type IncludedItemProps = {
  item: IncludedItemType;
};

export function IncludedItem({ item }: IncludedItemProps) {
  return (
    <li className="included-item">
      <span className="included-item__quantity">{item.quantity}x</span>
      <span className="included-item__item">{item.item}</span>
    </li>
  );
}

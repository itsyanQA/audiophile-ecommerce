import RightArrowIcon from "@assets/shared/desktop/icon-arrow-right.svg?react";
import "./shop-button.scss";

export function ShopButton() {
  return (
    <button className="shop-button">
      <span className="shop-button__text">shop</span>
      <RightArrowIcon />
    </button>
  );
}

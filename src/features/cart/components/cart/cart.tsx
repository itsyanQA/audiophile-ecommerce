import "./cart.scss";
import CartIcon from "@assets/shared/desktop/icon-cart.svg?react";
import { useState } from "react";
import { CartContent, useCartContext } from "@features/cart";

export function Cart() {
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);
  const { cartItems } = useCartContext();

  return (
    <div className="cart">
      <CartIcon
        className="cart__icon"
        onClick={(e) => {
          setIsCartModalOpen((prevState) => !prevState);
          e.stopPropagation();
        }}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setIsCartModalOpen((prevState) => !prevState);
          }
        }}
      />
      {!!cartItems?.length && (
        <span className="cart__item-count">
          {cartItems.map((item) => item.quantity).reduce((acc, currentValue) => acc + currentValue, 0)}
        </span>
      )}
      {isCartModalOpen && <CartContent setIsCartModalOpen={setIsCartModalOpen} />}
    </div>
  );
}

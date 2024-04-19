import { useState } from "react";
import { CartItem, CartItems, useCartContext } from "@features/cart";
import "./items-bought.scss";

export function ItemsBought() {
  const [isViewMore, setIsViewMore] = useState<boolean>(false);
  const {
    cartItems,
    prices: { grandTotal },
  } = useCartContext();
  const isMoreThanOneItemInCart = cartItems?.length > 1;
  const cartItemsLengthMinusOne = cartItems?.length - 1;
  const toggleView = () => setIsViewMore((prevState) => !prevState);

  return (
    <div className={`items-bought ${isViewMore ? "items-bought--is-view-more" : ""}`}>
      <div className="items-bought__items">
        <div className={`items-bought__cart-item-wrapper ${isMoreThanOneItemInCart ? "items-bought__cart-item-wrapper--multiple" : ""}`}>
          {isViewMore ? <CartItems isInCheckout={true} /> : <CartItem cartItem={cartItems[0]} isInCheckout />}
        </div>
        {isMoreThanOneItemInCart && (
          <span
            className="items-bought__more-items-text"
            onClick={toggleView}
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" ? toggleView() : null)}
          >
            {isViewMore ? "View less" : `and ${cartItemsLengthMinusOne} other item${cartItemsLengthMinusOne === 1 ? "" : "(s)"}`}
          </span>
        )}
      </div>

      <div className={`items-bought__total ${isViewMore ? "items-bought__total--is-view-more" : ""}`}>
        <span className="items-bought__grand-total-text">grand total</span>
        <span className="items-bought__grand-total-price">$ {grandTotal.toLocaleString()}</span>
      </div>
    </div>
  );
}

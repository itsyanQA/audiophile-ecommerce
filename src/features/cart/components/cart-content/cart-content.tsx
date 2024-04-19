import "./cart-content.scss";
import { useCartContext } from "@features/cart";
import { Button } from "@components/button";
import { useClickOutside } from "@hooks/use-click-outside";
import { Dispatch, MutableRefObject, SetStateAction, useRef } from "react";
import { CartEmpty, CartItems } from "@features/cart";
import { Cart } from "@customTypes/types";
import { StorageService } from "src/utils/storage-service";
import { Link } from "@components/styled";
import { LabeledPrice } from "@components/labeled-price/labeled-price";

type CartContentProps = {
  setIsCartModalOpen: Dispatch<SetStateAction<boolean>>;
};

export function CartContent({ setIsCartModalOpen }: CartContentProps) {
  const cartContentRef = useRef<HTMLDivElement | null>(null);
  const {
    cartItems: cartFromContext,
    clearCart,
    prices: { totalItemPrice },
  } = useCartContext();
  const cartFromStorage = StorageService.getItem("cart") as Cart[];
  const cart = cartFromContext ?? cartFromStorage;
  useClickOutside(cartContentRef as MutableRefObject<HTMLDivElement>, () => setIsCartModalOpen((prevState: boolean) => !prevState));

  return (
    <div className={`cart-content ${!cart?.length ? "cart-content--empty" : ""}`} ref={cartContentRef}>
      {!cart?.length ? (
        <CartEmpty />
      ) : (
        <>
          <div className="cart-content__top">
            <span className="cart-content__cart-amount">cart ({cart?.length})</span>
            <button className="cart-content__remove-all" onClick={clearCart}>
              Remove all
            </button>
          </div>
          <CartItems />
          <LabeledPrice label="total" price={totalItemPrice.toLocaleString()} />
          <Link to="/checkout" onClick={() => setIsCartModalOpen((prevState) => !prevState)}>
            <Button variant="colorful" fullWidth tabIndex={-1}>
              checkout
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}

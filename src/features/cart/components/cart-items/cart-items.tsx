import { useCartContext } from "@features/cart/context/cart-context";
import "./cart-items.scss";
import { CartItem } from "..";

type CartItemsProps = {
  isInCheckout?: boolean;
};

export function CartItems({ isInCheckout }: CartItemsProps) {
  const { cartItems } = useCartContext();

  return (
    <ul className={`cart-items ${isInCheckout ? "cart-items--in-checkout" : ""} ${cartItems?.length > 3 ? "cart-items--scrollable" : ""}`}>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} isInCheckout={isInCheckout} />
      ))}
    </ul>
  );
}

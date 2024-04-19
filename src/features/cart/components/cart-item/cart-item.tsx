import "./cart-item.scss";
import { Cart } from "@customTypes/types";
import { useDeviceEvaluator } from "@hooks/use-device-evaluator";
import { useCartContext, Quantity } from "@features/cart";

type CartItemProps = {
  cartItem: Cart;
  isInCheckout?: boolean;
};

export function CartItem({ cartItem, isInCheckout }: CartItemProps) {
  const device = useDeviceEvaluator();
  const { setCartItems } = useCartContext();

  const quantityHandler = (action: "INCREASE" | "DECREASE") => {
    setCartItems((prevCart) => {
      if (action === "DECREASE" && prevCart.find((item) => item.id === cartItem.id)?.quantity === 1)
        return prevCart.filter((item) => item.id !== cartItem.id);

      return prevCart.map((item) => {
        if (item.id === cartItem.id) {
          return { ...item, quantity: action === "INCREASE" ? item.quantity + 1 : item.quantity - 1 };
        }
        return item;
      });
    });
  };

  return (
    <li className="cart-item">
      <img src={cartItem.image[device]} alt={cartItem.name} />
      <div className={`cart-item__info-with-quantity ${isInCheckout ? "cart-item__info-with-quantity--in-checkout-page" : ""}`}>
        <div className="cart-item__info">
          <span className="cart-item__name">{cartItem.name.split(" ")[0]}</span>
          <span className="cart-item__price">$ {cartItem.price}</span>
        </div>

        {isInCheckout ? (
          <span className="cart-item__quantity-text">x{cartItem?.quantity}</span>
        ) : (
          <Quantity
            quantity={cartItem.quantity}
            increaseQuantityHandler={() => quantityHandler("INCREASE")}
            decreaseQuantityHandler={() => quantityHandler("DECREASE")}
            variant="small"
          />
        )}
      </div>
    </li>
  );
}

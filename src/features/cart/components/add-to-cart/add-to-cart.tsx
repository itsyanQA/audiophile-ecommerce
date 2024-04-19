import { Button } from "@components/button";
import "./add-to-cart.scss";
import { Quantity } from "../quantity";
import { useState } from "react";
import { useProductPageContext } from "@features/product-page";
import { useCartContext } from "@features/cart/context/cart-context";

export function AddToCart() {
  const product = useProductPageContext();
  const { setCartItems } = useCartContext();
  const [quantity, setQuantity] = useState<number>(1);

  const addToCartHandler = () => {
    if (!quantity) return;

    setCartItems((prevItems) => {
      const isItemExistsInCart = prevItems.some((item) => item.id === product.id);
      const updatedItems = prevItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + quantity };
        }

        return item;
      });

      if (isItemExistsInCart) {
        return updatedItems;
      } else {
        return [
          ...prevItems,
          {
            quantity: quantity,
            name: product.name,
            price: product.price,
            image: product.image,
            id: product.id,
          },
        ];
      }
    });

    setQuantity(1);
  };

  const quantityHandler = (action: "INCREASE" | "DECREASE") => {
    action === "INCREASE"
      ? setQuantity((prevQuantity) => prevQuantity + 1)
      : setQuantity((prevQuantity) => {
          if (prevQuantity) return prevQuantity - 1;
          return prevQuantity;
        });
  };

  return (
    <div className="add-to-cart">
      <Quantity
        quantity={quantity}
        increaseQuantityHandler={() => quantityHandler("INCREASE")}
        decreaseQuantityHandler={() => quantityHandler("DECREASE")}
        isDecreaseDisabled={quantity === 1}
      />
      <Button variant="colorful" onClick={addToCartHandler} disabled={!quantity}>
        add to cart
      </Button>
    </div>
  );
}

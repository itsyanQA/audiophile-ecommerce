import { Cart, CartPrices } from "@customTypes/types";
import { CartContext } from "@features/cart/context/cart-context";
import { ReactNode, useEffect, useState } from "react";
import { StorageService } from "src/utils/storage-service";

type CartContextProviderProps = {
  children: ReactNode;
};

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<Cart[] | []>(StorageService.getItem("cart") ?? []);
  // --- Cart prices
  const cartItemsPrice = cartItems.map((item) => item.quantity * item.price).reduce((acc, currentValue) => acc + currentValue, 0);
  const cartCalculatedVat = Math.round(cartItemsPrice * 0.2);
  const deliveryFee = 50;
  const cartGrandTotal = [+cartItemsPrice, +cartCalculatedVat, deliveryFee].reduce((acc, currentValue) => acc + currentValue, 0);

  const prices: CartPrices = {
    totalItemPrice: cartItemsPrice,
    vat: cartCalculatedVat,
    grandTotal: cartGrandTotal,
  };
  // ---

  const clearCart = () => {
    setCartItems([]);
    StorageService.deleteItem("cart");
  };

  useEffect(() => {
    if (cartItems) {
      StorageService.setItem("cart", cartItems);
    }
  }, [cartItems]);

  return <CartContext.Provider value={{ cartItems, setCartItems, clearCart, prices }}>{children}</CartContext.Provider>;
}

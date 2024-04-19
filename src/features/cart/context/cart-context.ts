import { Cart, CartPrices } from "@customTypes/types";
import { Dispatch, SetStateAction, createContext, useContext } from "react";

type CartContextType = {
  cartItems: Cart[];
  setCartItems: Dispatch<SetStateAction<Cart[]>>;
  clearCart: () => void;
  prices: CartPrices;
};

export const CartContext = createContext<CartContextType | null>(null);

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Component must be wrapped inside cart context provider");
  }

  return context;
};

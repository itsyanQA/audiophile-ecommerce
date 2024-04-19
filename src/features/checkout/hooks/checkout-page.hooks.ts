import { useCartContext } from "@features/cart";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useCheckoutPage(isFinishedOrder: boolean) {
  const navigate = useNavigate();
  const { cartItems } = useCartContext();

  useEffect(() => {
    if (!cartItems?.length) {
      navigate("/");
    }
  }, [cartItems]);

  useEffect(() => {
    if (isFinishedOrder) {
      document.querySelector(".success-popup")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isFinishedOrder]);
}

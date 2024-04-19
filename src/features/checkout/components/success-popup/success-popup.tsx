import "./success-popup.scss";
import { useClickOutside } from "@hooks/use-click-outside";
import { MutableRefObject, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "@features/cart";
import ConfirmationIcon from "@assets/checkout/icon-order-confirmation.svg?react";
import { Button } from "@components/button";
import { ItemsBought } from "../items-bought";

export function SuccessPopup() {
  const { setCartItems } = useCartContext();
  const navigate = useNavigate();
  const popupRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(popupRef as MutableRefObject<HTMLDivElement>, onBlurHandler);

  function onBlurHandler() {
    setCartItems([]);
    navigate("/");
  }

  const actionHandler = () => {
    setCartItems([]);
    navigate("/");
  };

  return (
    <div className="success-popup" ref={popupRef}>
      <ConfirmationIcon />
      <h3>thank you for your order</h3>
      <p>You will receive an email confirmation shortly.</p>
      <ItemsBought />
      <Button variant="colorful" fullWidth onClick={actionHandler}>
        back to home
      </Button>
    </div>
  );
}

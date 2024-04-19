import { BillingDetails } from "@features/checkout/components/billing-details";
import "./form.scss";
import { ShippingInfo } from "../shipping-info";
import { PaymentDetails } from "..";

export function Form() {
  return (
    <div className="form">
      <h1 className="form__title">checkout</h1>
      <BillingDetails />
      <ShippingInfo />
      <PaymentDetails />
    </div>
  );
}

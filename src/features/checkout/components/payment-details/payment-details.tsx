import "./payment-details.scss";
import { PaymentMethod } from "../payment-method";
import { useState } from "react";
import { TPaymentMethod } from "@customTypes/types";
import { EMoney, CashOnDelivery } from "@features/checkout";

export function PaymentDetails() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<TPaymentMethod>("Cash on Delivery");
  const methodToDisplay: Record<TPaymentMethod, JSX.Element> = {
    "Cash on Delivery": <CashOnDelivery />,
    "e-Money": <EMoney isSelectedMethod={selectedPaymentMethod === "e-Money"} />,
  };

  return (
    <div className="payment-details">
      <h2>Payment Details</h2>

      <div className="payment-details__method">
        <span className="payment-details__payment-method-text">Payment Method</span>
        <div className="payment-details__methods">
          <PaymentMethod name="e-Money" onClick={() => setSelectedPaymentMethod("e-Money")} selectedMethod={selectedPaymentMethod} />
          <PaymentMethod
            name="Cash on Delivery"
            onClick={() => setSelectedPaymentMethod("Cash on Delivery")}
            selectedMethod={selectedPaymentMethod}
          />
        </div>
      </div>
      {selectedPaymentMethod && (
        <div key={selectedPaymentMethod} className="payment-details__displayed-method-container">
          {methodToDisplay[selectedPaymentMethod]}
        </div>
      )}
    </div>
  );
}

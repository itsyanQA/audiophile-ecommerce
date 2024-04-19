import "./cash-on-delivery.scss";
import Cash from "@assets/checkout/icon-cash-on-delivery.svg?react";

export function CashOnDelivery() {
  return (
    <div className="cash-on-delivery">
      <Cash />
      <p>
        The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your
        address is correct so that your order will not be cancelled.
      </p>
    </div>
  );
}

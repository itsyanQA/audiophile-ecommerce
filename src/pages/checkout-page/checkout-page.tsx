import "./checkout-page.scss";
import { GoBack } from "@components/go-back";
import { PageContainer } from "@components/styled";
import { Checkout, useCheckoutPage } from "@features/checkout";
import { useState } from "react";

export function CheckoutPage() {
  const [isFinishedOrder, setIsFinishedOrder] = useState<boolean>(false);
  useCheckoutPage(isFinishedOrder);

  return (
    <PageContainer $marginBlock="80px 200px">
      <div className="checkout-page">
        <GoBack />
        <Checkout isFinishedOrder={isFinishedOrder} setIsFinishedOrder={setIsFinishedOrder} />
      </div>
    </PageContainer>
  );
}

import { CartItems, useCartContext } from "@features/cart";
import "./summary.scss";
import { LabeledPrice } from "@components/labeled-price/labeled-price";
import { Button } from "@components/button";

export function Summary() {
  const {
    prices: { totalItemPrice, vat, grandTotal },
  } = useCartContext();

  const prices = [
    { label: "total", price: totalItemPrice },
    { label: "shipping", price: 50 },
    { label: "vat (included)", price: vat },
  ];

  return (
    <div className="summary">
      <h2 className="summary__title">summary</h2>
      <CartItems isInCheckout />
      <div className="summary__prices">
        {prices.map((item, index) => (
          <LabeledPrice label={item.label} price={item.price.toLocaleString()} key={index} />
        ))}
      </div>
      <LabeledPrice label="grand total" price={grandTotal.toLocaleString()} />
      <Button variant="colorful" fullWidth type="submit">
        continue & pay
      </Button>
    </div>
  );
}

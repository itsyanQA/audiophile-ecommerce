import "./labaled-price.scss";

type LabeledPrice = {
  label: string;
  price: number | string;
};

export function LabeledPrice({ label, price }: LabeledPrice) {
  return (
    <div className="labeled-price">
      <span className="labeled-price__label">{label}</span>
      <span className="labeled-price__price">$ {price}</span>
    </div>
  );
}

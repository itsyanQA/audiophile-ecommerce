import "./quantity.scss";

type QuantityProps = {
  quantity: number;
  increaseQuantityHandler: () => void;
  decreaseQuantityHandler: () => void;
  isDecreaseDisabled?: boolean;
  variant?: "regular" | "small";
};

export function Quantity(props: QuantityProps) {
  const { quantity, increaseQuantityHandler, decreaseQuantityHandler, isDecreaseDisabled, variant = "regular" } = props;

  return (
    <div className={`quantity ${`quantity--${variant}`}`}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          decreaseQuantityHandler();
        }}
        disabled={isDecreaseDisabled}
      >
        -
      </button>
      <span className="quantity__number">{quantity}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          increaseQuantityHandler();
        }}
      >
        +
      </button>
    </div>
  );
}

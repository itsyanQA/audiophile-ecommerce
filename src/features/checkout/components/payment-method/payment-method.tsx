import "./payment-method.scss";

type PaymentMethodProps = {
  name: string;
  selectedMethod: string | undefined;
  onClick: () => void;
};

export function PaymentMethod({ name, selectedMethod, onClick }: PaymentMethodProps) {
  const isMethodEqualToSelectedMethod = name === selectedMethod;

  return (
    <div
      className={`payment-method ${isMethodEqualToSelectedMethod ? "payment-method__selected" : ""}`}
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" ? onClick() : null)}
    >
      <div className="payment-method__checkbox">{isMethodEqualToSelectedMethod && <div className="payment-method__checkbox-dot" />}</div>
      <span>{name}</span>
    </div>
  );
}

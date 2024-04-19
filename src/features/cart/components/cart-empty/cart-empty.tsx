import "./cart-empty.scss";

export function CartEmpty() {
  const EMOJIS = ["😬", "😭", "😳", "😴", "😵", "😶", "💀", "🤨", "🙄"];

  return (
    <div className="cart-empty">
      <span className="cart-empty__text">your cart is empty</span>
      <span className="cart-empty__emoji">{EMOJIS[Math.floor(Math.random() * EMOJIS.length)]}</span>
    </div>
  );
}

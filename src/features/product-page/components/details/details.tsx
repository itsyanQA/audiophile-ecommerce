import { Features, InTheBox } from "@features/product-page";
import "./details.scss";

export function Details() {
  return (
    <div className="details">
      <Features />
      <InTheBox />
    </div>
  );
}

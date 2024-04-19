import "./banners.scss";
import { ZX9Banner, ZX7Banner, YX1Banner } from "@features/home-page";

export function Banners() {
  return (
    <div className="banners">
      <ZX9Banner />
      <ZX7Banner />
      <YX1Banner />
    </div>
  );
}

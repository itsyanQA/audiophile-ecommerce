import { useScrollToTop } from "@hooks/use-scroll-to-top";
import { CheckoutPage } from "@pages/checkout-page";
import { EarphonesPage } from "@pages/earphones-page";
import { HeadphonesPage } from "@pages/headphones-page";
import { HomePage } from "@pages/home-page";
import { ProductPage } from "@pages/product-page/product-page";
import { SpeakersPage } from "@pages/speakers-page";
import { Route, Routes } from "react-router-dom";

export function AppRoutes() {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/headphones" element={<HeadphonesPage />} />
      <Route path="/speakers" element={<SpeakersPage />} />
      <Route path="/earphones" element={<EarphonesPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

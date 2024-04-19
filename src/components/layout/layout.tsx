import "./layout.scss";
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { AppRoutes } from "src/routes";
import { CartContextProvider } from "@features/cart/components/cart-context-provider/cart-context-provider";
import { useLocation } from "react-router-dom";

export function Layout() {
  const location = useLocation();
  return (
    <>
      <CartContextProvider>
        <Header />
        <main key={location.key}>
          <AppRoutes />
        </main>
        <Footer />
      </CartContextProvider>
    </>
  );
}

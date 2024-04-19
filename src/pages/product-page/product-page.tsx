import "./product-page.scss";
import { CategoryCards } from "@components/category-cards";
import { GoBack } from "@components/go-back";
import { PageContainer } from "@components/styled";
import { ProductCard } from "@features/product-card";
import { Gallery, ProductPageProvider, Details, Upsell } from "@features/product-page";
import { getProductById } from "src/utils/product-finder";
import { StoreBanner } from "@components/store-banner";
import { useDeviceEvaluator } from "@hooks/use-device-evaluator";
import { Device } from "@customTypes/types";

export function ProductPage() {
  const device = useDeviceEvaluator();
  const pageContainerMarginBlockPerDevice: Record<Device, number> = {
    mobile: 20,
    tablet: 40,
    desktop: 80,
  };

  return (
    <ProductPageProvider>
      <PageContainer $marginBlock={`${pageContainerMarginBlockPerDevice[device]}px`}>
        <div className="go-back-and-product-container">
          <GoBack />
          <ProductCard product={getProductById()} />
        </div>
        <Details />
        <Gallery />
        <Upsell />
        <CategoryCards />
        <StoreBanner />
      </PageContainer>
    </ProductPageProvider>
  );
}

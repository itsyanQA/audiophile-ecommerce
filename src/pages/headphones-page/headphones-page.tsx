import { CategoryBanner } from "@components/category-banner";
import { CategoryCards } from "@components/category-cards";
import { ProductCards } from "@components/product-cards";
import { StoreBanner } from "@components/store-banner";
import { PageContainer } from "@components/styled";

export function HeadphonesPage() {
  return (
    <>
      <CategoryBanner>headphones</CategoryBanner>
      <PageContainer>
        <ProductCards category="HEADPHONES" />
        <CategoryCards />
        <StoreBanner />
      </PageContainer>
    </>
  );
}

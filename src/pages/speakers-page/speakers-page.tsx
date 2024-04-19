import { CategoryBanner } from "@components/category-banner";
import { CategoryCards } from "@components/category-cards";
import { ProductCards } from "@components/product-cards";
import { StoreBanner } from "@components/store-banner";
import { PageContainer } from "@components/styled";

export function SpeakersPage() {
  return (
    <>
      <CategoryBanner>speakers</CategoryBanner>
      <PageContainer>
        <ProductCards category="SPEAKERS" />
        <CategoryCards />
        <StoreBanner />
      </PageContainer>
    </>
  );
}

import { CategoryCards } from "@components/category-cards";
import { StoreBanner } from "@components/store-banner";
import { PageContainer } from "@components/styled";
import { Banners } from "@features/home-page";

export function Content() {
  return (
    <PageContainer>
      <CategoryCards />
      <Banners />
      <StoreBanner />
    </PageContainer>
  );
}

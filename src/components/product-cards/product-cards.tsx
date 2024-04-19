import products from "../../data/data.json";
import { Category } from "@customTypes/types";
import { ProductCard } from "@features/product-card";

type ProductCardsProps = {
  category: Category;
};

export function ProductCards({ category }: ProductCardsProps) {
  return (
    <>
      {products
        .filter((product) => product.category === category.toLowerCase())
        .map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
    </>
  );
}

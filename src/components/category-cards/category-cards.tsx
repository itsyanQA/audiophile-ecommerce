import { CategoryCard } from "@components/category-card";
import "./category-cards.scss";

const CATEGORY_CARDS = [
  {
    image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    name: "headphones",
  },
  {
    image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    name: "speakers",
  },
  {
    image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    name: "earphones",
  },
];



export function CategoryCards() {
  return (
    <div className="category-cards">
      {CATEGORY_CARDS.map((category) => (
        <CategoryCard
          key={category.name}
          image={category.image}
          name={category.name}
        />
      ))}
    </div>
  );
}

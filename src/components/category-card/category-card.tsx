import { ShopButton } from "@components/shop-button";
import "./category-card.scss";
import { Link } from "@components/styled";

type CategoryCardProps = {
  image: string;
  name: string;
};

export function CategoryCard({ image, name }: CategoryCardProps) {
  return (
    <div className="category-card">
      <div className="category-card__inside-container">
        <img className="category-card__image" src={image} alt={name} />
        <span className="category-card__name">{name}</span>
        <Link to={`/${name}`}>
          <ShopButton />
        </Link>
      </div>
    </div>
  );
}

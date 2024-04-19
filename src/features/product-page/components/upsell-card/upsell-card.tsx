import "./upsell-card.scss";
import { Button } from "@components/button";
import { Link } from "@components/styled";

type UpsellCardProps = {
  image: string;
  name: string;
  id: number;
};

export function UpsellCard({ image, name, id }: UpsellCardProps) {
  return (
    <div className="upsell-card">
      <img src={image} alt={name} />
      <h5 className="upsell-card__name">{name}</h5>
      <Link to={`/product/${id}`}>
        <Button variant="colorful" tabIndex={-1}>
          see product
        </Button>
      </Link>
    </div>
  );
}

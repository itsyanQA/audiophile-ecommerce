import { useProductCardContext } from "@features/product-card";
import { Button } from "@components/button";
import { Link } from "@components/styled";
import { AddToCart } from "@features/cart";

export function ProductCardButton() {
  const product = useProductCardContext();
  const isProductPage = window.location.pathname.includes("product");

  return isProductPage ? (
    <AddToCart />
  ) : (
    <Link to={`/product/${product.id}`} $width="fit-content">
      <Button variant="colorful" tabIndex={-1}>
        see product
      </Button>
    </Link>
  );
}

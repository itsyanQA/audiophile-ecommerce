import { Button } from "@components/button";
import "./yx1-banner.scss";
import { Link } from "@components/styled";
import { useDeviceEvaluator } from "@hooks/use-device-evaluator";

export function YX1Banner() {
  const device = useDeviceEvaluator();

  return (
    <div className="yx1-banner">
      <img src={`assets/home/${device}/image-earphones-yx1.jpg`} alt="yx1 earphones" />
      <div className="yx1-banner__typography-container">
        <h2 className="yx1-banner__title">yx1 earphones</h2>
        <Link to="/product/1" $width="fit-content">
          <Button variant="transparent" tabIndex={-1}>
            see product
          </Button>
        </Link>
      </div>
    </div>
  );
}

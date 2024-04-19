import { Button } from "@components/button";
import "./zx9-banner.scss";
import { Link } from "@components/styled";
import { useDeviceEvaluator } from "@hooks/use-device-evaluator";

export function ZX9Banner() {
  const device = useDeviceEvaluator();

  return (
    <div className="zx9-banner">
      <img src={`assets/home/${device}/image-speaker-zx9.png`} alt="zx9 speaker" />
      <div className="zx9-banner__typography-container">
        <h1 className="zx9-banner__title">zx9 speaker</h1>
        <span className="zx9-banner__description">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </span>
        <Link to="/product/6" $width="fit-content">
          <Button variant="black" tabIndex={-1}>
            see product
          </Button>
        </Link>
      </div>
    </div>
  );
}

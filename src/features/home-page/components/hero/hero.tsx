import "./hero.scss";
import { Button } from "@components/button";
import { Link } from "@components/styled";
import { useDeviceEvaluator } from "@hooks/use-device-evaluator";
import { useRef } from "react";

export function Hero() {
  const device = useDeviceEvaluator();
  const heroImgRef = useRef<HTMLImageElement | null>(null);
  const HEADER_HEIGHT_IN_PIXELS = 106;
  const assignHeroMobileHeight = (): string | undefined => {
    if (heroImgRef?.current?.offsetHeight) {
      return `${heroImgRef?.current?.offsetHeight - HEADER_HEIGHT_IN_PIXELS}px`;
    }

    return undefined;
  };

  return (
    <div className="hero" style={{ height: device === "mobile" ? assignHeroMobileHeight() : undefined }}>
      <div className="hero__product">
        <span className="hero__new-product-text">new product</span>
        <h1 className="hero__new-product-name">XX99 Mark II Headphones</h1>
        <p className="hero__new-product-description">
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </p>
        <Link to="/product/4" $width="fit-content">
          <Button variant="colorful" tabIndex={-1}>
            see product
          </Button>
        </Link>
      </div>
      <img
        className="hero__image"
        src={device === "mobile" ? "/assets/home/mobile/image-header.jpg" : "/assets/home/desktop/image-hero-fixed.png"}
        alt="headphones-hero"
        ref={heroImgRef}
      />
    </div>
  );
}

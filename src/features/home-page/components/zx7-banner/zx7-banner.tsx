import { Button } from "@components/button";
import "./zx7-banner.scss";
import { Link } from "@components/styled";
import { useDeviceEvaluator } from "@hooks/use-device-evaluator";
import { useRef } from "react";

export function ZX7Banner() {
  const device = useDeviceEvaluator();
  const bannerImgRef = useRef<HTMLImageElement | null>(null);
  const assignMobileContainerHeight = (): string | undefined => {
    if (bannerImgRef?.current?.offsetHeight) {
      return `${bannerImgRef?.current?.offsetHeight}px`;
    }

    return undefined;
  };

  return (
    <div className="zx7-banner" style={{ height: device === "mobile" ? assignMobileContainerHeight() : undefined }}>
      <img src={`/assets/home/${device}/image-speaker-zx7.jpg`} alt="zx7 banner" ref={bannerImgRef} />
      <h2 className="zx7-banner__title">zx7 speaker</h2>
      <Link to="/product/5" $width="fit-content">
        <Button variant="transparent" tabIndex={-1}>
          see product
        </Button>
      </Link>
    </div>
  );
}

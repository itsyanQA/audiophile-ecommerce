import { useDeviceEvaluator } from "@hooks/use-device-evaluator";
import "./store-banner.scss";

export function StoreBanner() {
  const device = useDeviceEvaluator();

  return (
    <div className="store-banner">
      <div className="store-banner__typography-container">
        <h2 className="store-banner__title">
          bringing you the <span className="store-banner__best">best </span>
          audio gear
        </h2>
        <p className="store-banner__description">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img
        src={`assets/shared/${device}/image-best-gear.jpg`}
        alt="person listening to music"
      />
    </div>
  );
}

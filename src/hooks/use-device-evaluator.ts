import { Device } from "@customTypes/types";
import { useEffect, useState } from "react";

export function useDeviceEvaluator() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const resizeEventHandler = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeEventHandler);

    return () => {
      window.removeEventListener("resize", resizeEventHandler);
    };
  }, []);

  const getDeviceType = (): Device => {
    if (width <= 600) {
      return "mobile";
    } else if (width > 600 && width < 900) {
      return "tablet";
    }

    return "desktop";
  };

  return getDeviceType();
}

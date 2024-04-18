import { PropsWithChildren } from "react";
import "./category-banner.scss";

export function CategoryBanner({ children }: PropsWithChildren) {
  return <div className="category-banner">{children}</div>;
}

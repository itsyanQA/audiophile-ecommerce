import { PropsWithChildren } from "react";
import "./button.scss";

type ButtonProps = {
  variant: "colorful" | "transparent" | "black";
} & PropsWithChildren;

export function Button({ variant, children }: ButtonProps) {
  return <button className={`button button--${variant}`}>{children}</button>;
}

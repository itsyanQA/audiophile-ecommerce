import { ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren } from "react";
import "./button.scss";

type ButtonProps = {
  variant: "colorful" | "transparent" | "black";
  fullWidth?: boolean;
} & PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  const { variant, fullWidth, children, ...rest } = props;

  return (
    <button className={`button button--${variant} ${fullWidth ? "button--full-width" : ""}`} {...rest}>
      {children}
    </button>
  );
}

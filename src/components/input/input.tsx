import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import "./input.scss";

type InputProps = {
  label: string;
  errorMessage: string | undefined;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const { label, errorMessage, ...rest } = props;
  const isError = !!errorMessage;

  return (
    <div className={`input-container ${isError ? "input-container--error" : ""}`}>
      <div className="input-container__label-and-error-container">
        <label htmlFor={rest.id}>{label}</label>
        {!!errorMessage && <span>{errorMessage}</span>}
      </div>
      <input {...rest} ref={ref} />
    </div>
  );
});

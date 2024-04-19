import { createContext, useContext } from "react";
import { FieldErrors, UseFormUnregister, UseFormRegister } from "react-hook-form";
import { TFormScheme } from "@customTypes/types";

type FormContextType = {
  register: UseFormRegister<TFormScheme>;
  unregister: UseFormUnregister<TFormScheme>;
  errors: FieldErrors<TFormScheme>;
};

export const FormContext = createContext<FormContextType | null>(null);

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("Component must be wrapped inside form context provider");
  }

  return context;
};

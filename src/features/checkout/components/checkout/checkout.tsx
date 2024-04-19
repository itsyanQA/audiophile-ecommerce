import "./checkout.scss";
import { Summary, Form, FormContext } from "@features/checkout";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { TFormScheme, formScheme } from "@customTypes/types";
import { SuccessPopup } from "../success-popup";
import { createPortal } from "react-dom";

type CheckoutProps = {
  isFinishedOrder: boolean;
  setIsFinishedOrder: Dispatch<SetStateAction<boolean>>;
};

export function Checkout({ isFinishedOrder, setIsFinishedOrder }: CheckoutProps) {
  const {
    register,
    handleSubmit,
    reset,
    unregister,
    formState: { errors },
  } = useForm<TFormScheme>({ resolver: zodResolver(formScheme) });

  const onSubmit: SubmitHandler<TFormScheme> = async () => {
    setIsFinishedOrder(true);
    reset();
  };

  return (
    <FormContext.Provider value={{ register, errors, unregister }}>
      <form className="checkout" onSubmit={handleSubmit(onSubmit)}>
        <Form />
        <Summary />
      </form>
      {isFinishedOrder && createPortal(<SuccessPopup />, document.body)}
    </FormContext.Provider>
  );
}

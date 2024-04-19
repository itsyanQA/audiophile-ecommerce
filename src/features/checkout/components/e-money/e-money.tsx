import "./e-money.scss";
import { useFormContext } from "@features/checkout";
import { Input } from "@components/input";

type EMoneyProps = {
  isSelectedMethod: boolean;
};

export function EMoney({ isSelectedMethod }: EMoneyProps) {
  const { register, errors } = useFormContext();
  const extraRegisterProps = {
    required: isSelectedMethod,
    valueAsNumber: true,
  };

  return (
    <div className="e-money-container">
      <Input
        {...(isSelectedMethod ? register("eMoneyNumber", extraRegisterProps) : {})}
        label="e-Money Number"
        id="e-money number"
        placeholder="238521993"
        errorMessage={errors?.eMoneyNumber?.message}
      />
      <Input
        {...(isSelectedMethod ? register("eMoneyPin", extraRegisterProps) : {})}
        label="e-Money PIN"
        id="e-money pin"
        placeholder="6891"
        errorMessage={errors?.eMoneyPin?.message}
      />
    </div>
  );
}

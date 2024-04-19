import { Input } from "@components/input";
import "./shipping-info.scss";
import { useFormContext } from "@features/checkout";

export function ShippingInfo() {
  const { register, errors } = useFormContext();

  return (
    <div className="shipping-info">
      <h2>shipping info</h2>
      <Input
        {...register("address")}
        label="Address"
        id="address"
        placeholder="1137 Williams Avenue"
        errorMessage={errors?.address?.message}
      />
      <div className="shipping-info__inputs">
        <Input {...register("zipCode")} label="ZIP Code" id="zip-code" placeholder="10001" errorMessage={errors?.zipCode?.message} />
        <Input {...register("city")} label="City" id="city" placeholder="New York" errorMessage={errors?.city?.message} />
        <Input {...register("country")} label="Country" id="country" placeholder="United States" errorMessage={errors?.country?.message} />
      </div>
    </div>
  );
}

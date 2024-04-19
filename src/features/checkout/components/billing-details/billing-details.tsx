import { Input } from "@components/input";
import "./billing-details.scss";
import { useFormContext } from "@features/checkout";

export function BillingDetails() {
  const { register, errors } = useFormContext();
  console.log(errors);

  return (
    <div className="billing-details">
      <h2>billing details</h2>
      <div className="billing-details__inputs">
        <Input {...register("name")} label="Name" id="name" placeholder="Alexei Ward" errorMessage={errors?.name?.message} />
        <Input
          {...register("email")}
          label="Email Address"
          id="email"
          placeholder="alexei@mail.com"
          errorMessage={errors?.email?.message}
        />
        <Input
          {...register("phone", { valueAsNumber: true })}
          label="Phone Number"
          id="phone"
          placeholder="+1 202-555-0136"
          errorMessage={errors?.phone?.message}
        />
      </div>
    </div>
  );
}

"use client";

import KidsForm from "@/forms/KidsForm";
import KidsInput from "@/forms/KidsInput";

import { FieldValues } from "react-hook-form";

export type TShippingAddressProps = {
  shipAddress?: Record<string, any>;
  setShipAddress: React.Dispatch<React.SetStateAction<Record<string, any>>>;
};

const ShippingAddress = ({ setShipAddress }: TShippingAddressProps) => {
  const onSubmit = async (data: FieldValues) => {
    setShipAddress(data);
  };

  return (
    <div className=" mt-12 max-w-[600px] w-full">
      <h2 className="text-2xl font-bold mb-3">Shipping Address</h2>
      <KidsForm onSubmit={onSubmit} className="border-2 p-3">
        <div className="md:flex gap-2 justify-between">
          <div>
            <KidsInput
              type="text"
              label="First Name"
              name="firstName"
              placeholder="Your first name"
              required={true}
              className="w-full rounded-md  mt-2"
            />
          </div>
          <div>
            <KidsInput
              type="text"
              label="Last Name"
              name="lastName"
              required={true}
              placeholder="Your last name"
              className="w-full rounded-md  mt-2"
            />
          </div>
        </div>

        <div className="md:flex gap-2 my-2">
          <div className="w-full">
            <KidsInput
              type="text"
              label="Address"
              name="address"
              required={true}
              placeholder="Your address"
              className="w-full rounded-md mt-2"
            />
          </div>
        </div>

        <div className="md:flex gap-2">
          <div>
            <KidsInput
              type="text"
              label="Contact Number"
              name="contactNumber"
              placeholder="Your number"
              required={true}
              className="w-full rounded-md mt-2"
            />
          </div>
          <div>
            <KidsInput
              type="text"
              label="state"
              name="state"
              required={true}
              placeholder="Your state"
              className="w-full rounded-md mt-2"
            />
          </div>
          <div>
            <KidsInput
              type="text"
              label="Zip Code"
              name="zipCode"
              placeholder="Your zip code"
              required={true}
              className="w-full rounded-md mt-2"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-ghost mt-4">
          Save
        </button>
      </KidsForm>
      <div className="mt-8 mb-6">
        <h2>Payment Method</h2>
        <p className="shadow-xl font-bold w-full max-w-52 text-center rounded-md mt-2">
          Cash On Delivery
        </p>
      </div>
    </div>
  );
};

export default ShippingAddress;

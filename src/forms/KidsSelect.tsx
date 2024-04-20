import { Controller, useFormContext } from "react-hook-form";

const items = ["true", "false"];

type TSelectProps = {
  name: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  items?: string[];
};
const KidsSelect = ({
  name,
  label,
  required,
  placeholder,
  items,
}: TSelectProps) => {
  const { control } = useFormContext();
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>} <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <select
              {...field}
              required={required}
              className="mt-2 w-full max-w-[300px]"
            >
              <option value="Please Select One" disabled>
                Please Select One
              </option>
              <option value="false">False</option>
              <option value="true">True</option>
            </select>
          );
        }}
      />
    </div>
  );
};

export default KidsSelect;

import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type: string;
  placeholder?: string;
  required?: boolean;
};

const KidsInput = ({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <>
          {label && <label>{label}</label>} <br />
          <input
            {...field}
            type={type}
            required={required}
            placeholder={placeholder}
            style={{
              border: "1px solid",
              marginTop: "3px",
              marginBottom: "10px",
            }}
            className="ring-2 border focus:border-black  m-auto max-w-[300px] w-full p-3 rounded-md"
          />
          {error && <span>{error?.message}</span>}
        </>
      )}
    />
  );
};

export default KidsInput;

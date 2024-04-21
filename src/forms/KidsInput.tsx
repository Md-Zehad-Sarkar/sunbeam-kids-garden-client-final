import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

const KidsInput = ({
  name,
  label,
  type = "text",
  placeholder,
  required,
  className,
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
              padding:'5px'
            }}
            className={className}
          />
          {error && <span>{error?.message}</span>}
        </>
      )}
    />
  );
};

export default KidsInput;

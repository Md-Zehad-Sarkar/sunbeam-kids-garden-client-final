import { Controller, useFormContext } from "react-hook-form";

type TTextareaProps = {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
};

const KidsTextArea = ({
  name,
  label,
  placeholder,
  className,
}: TTextareaProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <>
            {label && label}
            <textarea
              {...field}
              cols={20}
              rows={5}
              placeholder={placeholder}
              className={className}
            />
          </>
        );
      }}
    />
  );
};

export default KidsTextArea;

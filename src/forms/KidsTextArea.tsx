import { Controller, useFormContext } from "react-hook-form";

type TTextareaProps = {
  name: string;
  label?: string;
  placeholder?: string;
};

const KidsTextArea = ({ name, label, placeholder }: TTextareaProps) => {
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
              className="border max-w-[500px] w-full mt-2 p-2"
            />
          </>
        );
      }}
    />
  );
};

export default KidsTextArea;

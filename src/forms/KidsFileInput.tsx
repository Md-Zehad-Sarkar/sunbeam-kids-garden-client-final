import { Controller, useFormContext } from "react-hook-form";
type TFileUploadProps = {
  name: string;
  label?: string;
  className?: string;
};

const KidsFileInput = ({ name, label, className }: TFileUploadProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <>
            {label && <label>{label}</label>} <br />
            <input
              {...field}
              type="file"
              onChange={(e) => onChange(e.target.files?.[0])}
              value={value?.fileName}
              className={className}
            />
          </>
        );
      }}
    />
  );
};

export default KidsFileInput;

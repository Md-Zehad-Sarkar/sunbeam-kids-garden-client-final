import { Controller, useFormContext } from "react-hook-form";
type TFileUploadProps = {
  name: string;
  label?: string;
};

const KidsFileInput = ({ name, label }: TFileUploadProps) => {
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
              className="mt-[10px] mb-3 border max-w-[300px] w-full rounded-md"
            />
          </>
        );
      }}
    />
  );
};

export default KidsFileInput;

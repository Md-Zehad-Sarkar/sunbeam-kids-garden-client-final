import React, { ReactNode } from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
type TFormProps = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};

// sunbeam kids garden reusable form
const KidsForm = ({ children, onSubmit: submit }: TFormProps) => {
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  // Handle form submission
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    submit(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: "500px",
          margin: "0 auto",
          marginTop: "20px",
        }}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default KidsForm;

import { useForm } from "react-hook-form";
import { FormwixPasswordField, TypeFormData } from "formwix";

export default function FormwixPasswordFieldDemo() {
  const theme = {
    // define theme for the field
    // refer to themes section for more details
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onSubmit(data: TypeFormData) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* The FormwixEmailField component only renders the input field.
          It does not include a label or error message by default.
          You need to manually add them for better accessibility and user feedback. 
    */}
      <label htmlFor="password">Password</label>
      {errors.password && (
        <span className="text-red-500">
          {(errors.password.message as string) ?? "Required"}
        </span>
      )}

      <FormwixPasswordField
        field={{
          type: "password",
          name: "password",
          label: "Password",
          placeholder: "Enter your password",
          validation: {
            required: {
              value: true,
              message: "Password is required",
            },
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            containUpperCase: {
              value: true,
              message: "Password must contain at least one uppercase letter",
            },
            containLowerCase: {
              value: true,
              message: "Password must contain at least one lower letter",
            },
            containNumber: {
              value: true,
              message: "Password must contain at least one number",
            },
            containSpecialChar: {
              value: true,
              message: "Password must contain at least one special character",
            },
          },
        }}
        control={control}
        errors={errors}
        theme={theme}
      />
    </form>
  );
}

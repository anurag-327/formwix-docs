"use client";
import DemoLogin from "./ui/DemoLogin"; // Your existing form component
import { CodeBlock } from "../ui/Codeblock";

const demoCode = `import { Formwix, TypeFieldConfig, TypeFormConfig, TypeFormData } from "formwix";
import "formwix/dist/formwix.css";

export default function Login() {
  const fields: TypeFieldConfig[] = [
    {
      type: "email",
      label: "Email",
      name: "email",
      placeholder: "Enter your email",
      theme: {
        email: "border border-gray-300 w-full py-2 px-2 rounded-lg outline-none",
      },
      validation: {
        required: { value: true, message: "Email is required" },
      },
    },
    {
      type: "password",
      label: "Password",
      name: "password",
      placeholder: "Enter your password",
      theme: {
        passwordWrapper: "border flex justify-end items-center relative border-gray-300 w-full py-2 px-2 rounded-lg",
        passwordEyeButton: "text-gray-300",
        passwordEyeCloseButton: "text-gray-600",    
      },
      validation: {
        required: { value: true, message: "Password is required" },
        minLength: {
          value: 6,
          message: "Password must be at least 6 characters",
        },
        preventCommonPassword: {
          value: true,
          message: "Password is too common",
        },
        containLowerCase: {
          value: true,
          message: "Password must contain at least one lowercase letter",
        },
        containUpperCase: {
          value: true,
          message: "Password must contain at least one uppercase letter",
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
    },
  ];

  const config: TypeFormConfig = {
    fields,
    submitButtonLabel: "Login",
    validationMode: "onChange",
    onSubmit: (values: TypeFormData, { reset }) => {
      console.log(values);
      reset();
    },
  };

  return (
      <div>
          <Formwix 
            config={config} 
            theme={{
               submitButton: "bg-black text-white w-full py-2 rounded-lg disabled:cursor-not-allowed",
            }} />
      </div>
      );
}`;

export default function CodePreviewSection() {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl mx-auto md:border overflow-hidden items-center">
      <div className="w-full md:w-1/2 md:bg-gray-100 md:p-6 flex items-center justify-center">
        <DemoLogin />
      </div>
      <div className="w-full md:w-1/2 rounded-xl md:mr-6 md:p-0 max-h-[400px] md:max-h-[415px] overflow-scroll no-scrollbar">
        <CodeBlock code={demoCode} />
      </div>
    </div>
  );
}

"use client";
import { Formwiz, TypeFieldConfig, TypeFormData } from "formwiz";
import "formwiz/dist/formwiz.css";
export default function LoginForm() {
  const fields: TypeFieldConfig[] = [
    {
      type: "email",
      name: "email",
      label: "Email Address",
      placeholder: "Enter your email",
      validation: {
        required: { value: true, message: "Email is required" },
      },
    },
    {
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      validation: {
        required: { value: true, message: "Password is required" },
      },
    },
    {
      type: "checkbox",
      name: "rememberMe",
      label: "Remember me",
    },
  ];

  const formConfig = {
    onSubmit: (data: TypeFormData) => {
      console.log("Login data:", data);
      // Handle login logic here
    },
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    fields,
    submitText: "Log In",
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <Formwiz config={formConfig} />
      <div className="mt-4 text-center">
        <a href="#" className="text-blue-500 hover:underline">
          Forgot Password?
        </a>
      </div>
    </div>
  );
}

"use client";
import { Formwix, TypeFieldConfig, TypeFormData } from "formwix";
import "formwix/dist/formwix.css";
export default function SignupForm() {
  const fields: TypeFieldConfig[] = [
    {
      type: "text",
      name: "fullName",
      label: "Full Name",
      placeholder: "Enter your full name",
      validation: {
        required: { value: true, message: "Full name is required" },
      },
    },
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
      placeholder: "Create a password",
      validation: {
        required: { value: true, message: "Password is required" },
        minLength: {
          value: 8,
          message: "Password must be at least 8 characters",
        },
        containNumber: {
          value: true,
          message: "Password must contain at least one number",
        },
        containSpecialChar: {
          value: true,
          message: "Password must contain at least one special character",
        },
        containUpperCase: {
          value: true,
          message: "Password must contain at least one uppercase letter",
        },
        containLowerCase: {
          value: true,
          message: "Password must contain at least one lowercase letter",
        },
      },
    },
    {
      type: "password",
      name: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Confirm your password",
      validation: {
        required: { value: true, message: "Please confirm your password" },
        matchField: {
          field: "password",
          message: "Passwords do not match",
        },
      },
    },
    {
      type: "checkbox",
      name: "acceptTerms",
      label: "I accept the Terms of Service and Privacy Policy",
      validation: {
        required: {
          value: true,
          message: "You must accept the terms to continue",
        },
      },
    },
  ];

  const formConfig = {
    onSubmit: (data: TypeFormData) => {
      console.log("Signup data:", data);
      // Handle signup logic here
    },
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
    fields,
    submitText: "Create Account",
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
      <Formwix config={formConfig} />
      <div className="mt-4 text-center">
        <p>
          Already have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

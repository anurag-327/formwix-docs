"use client";
import {
  Formwix,
  TypeFieldConfig,
  TypeFormConfig,
  TypeFormData,
} from "formwix";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import FormWizBadge from "../../shared/FormwixBadge";
import { Separator } from "../../ui/separator";
import { toast } from "sonner";
import "formwix/dist/formwix.css";
export default function DemoSignup() {
  const fields: TypeFieldConfig[] = [
    {
      type: "text",
      label: "Full Name",
      name: "fullName",
      placeholder: "Enter your full name",
      validation: {
        required: { value: true, message: "Full Name is required" },
      },
    },
    {
      type: "email",
      label: "Email",
      name: "email",
      placeholder: "Enter your email",
      validation: {
        required: { value: true, message: "Email is required" },
      },
    },
    {
      type: "password",
      label: "Password",
      name: "password",
      placeholder: "Enter your password",
      validation: {
        required: { value: true, message: "Password is required" },
        minLength: {
          value: 6,
          message: "Password must be at least 6 characters",
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
    {
      type: "password",
      label: "Confirm Password",
      name: "confirmPassword",
      placeholder: "Confirm your password",
      validation: {
        required: { value: true, message: "Please confirm your password" },
        matchField: {
          field: "password",
          message: "Password does not match",
        },
      },
    },
  ];

  const config: TypeFormConfig = {
    fields,
    submitButtonLabel: "Sign Up",
    onSubmit: async (values: TypeFormData, { reset }) => {
      toast(
        <div className="flex flex-col w-full gap-2">
          <h2>You Submitted form with following details</h2>
          <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(values, null, 2)}
            </code>
          </pre>
        </div>,
        {
          duration: 5000,
        }
      );
      reset();
    },
  };

  return (
    <Card className="w-[95%] h-fit sm:w-[420px] relative">
      <FormWizBadge />
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-start">Sign up</CardTitle>
        <div className="text-sm text-gray-500">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 font-semibold">
            Sign in here
          </a>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="py-6">
        <Formwix
          config={config}
          theme={{
            label: "text-gray-800 font-[500]",
            email:
              "border border-gray-300 w-full py-2 px-2 rounded-lg outline-none",
            passwordWrapper:
              "border flex justify-end items-center relative border-gray-300 w-full py-2 px-2 rounded-lg",
            passwordEyeButton: "text-gray-800",
            passwordEyeCloseButton: "text-gray-800",
            submitButton: "bg-black text-white w-full py-2 rounded-lg",
          }}
        />
      </CardContent>
      <CardFooter>
        <p className="text-xs text-center">
          By signing in or creating an account, you are agreeing to our{" "}
          <a href="#" className="text-blue-600">
            Terms & Conditions{" "}
          </a>
          and our{" "}
          <a href="#" className="text-blue-600">
            Privacy Policy
          </a>
          .
        </p>
      </CardFooter>
    </Card>
  );
}

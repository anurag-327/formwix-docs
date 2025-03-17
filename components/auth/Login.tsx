"use client";
import {
  Formwiz,
  TypeFieldConfig,
  TypeFormConfig,
  TypeFormData,
} from "formwiz";
import "formwiz/dist/formwiz.css";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useSearchParams } from "next/navigation";
import FormWizBadge from "../shared/FormwizBadge";
import { Separator } from "../ui/separator";
export default function Login() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") ?? "/";
  const fields: TypeFieldConfig[] = [
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
    onSubmit: async (values: TypeFormData) => {
      console.log(values);
    },
  };

  return (
    <Card className="w-[95%] sm:w-[420px] relative">
      <FormWizBadge />
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-start">
          Welcome Back
        </CardTitle>
        <div className="text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            href={`/signup?redirect=${redirect}`}
            className="text-blue-600 font-semibold"
          >
            Sign up here
          </a>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="py-6">
        <Formwiz
          config={config}
          theme={{
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
          <a
            href="/terms-and-conditions"
            target="_blank"
            className="text-blue-600"
          >
            Terms & Conditions{" "}
          </a>
          and our{" "}
          <a href="/privacy-policy" target="_blank" className="text-blue-600">
            Privacy Policy
          </a>
          .
        </p>
      </CardFooter>
    </Card>
  );
}

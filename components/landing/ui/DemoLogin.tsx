"use client";
import FormWizBadge from "@/components/shared/FormwixBadge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Formwix,
  TypeFieldConfig,
  TypeFormConfig,
  TypeFormData,
} from "formwix";
import { toast } from "sonner";
import "formwix/dist/formwix.css";
export default function DemoLogin() {
  const fields: TypeFieldConfig[] = [
    {
      type: "email",
      label: "Email",
      name: "email",
      placeholder: "Enter your email",
      theme: {
        email:
          "border border-gray-300 w-full py-2 px-2 rounded-lg outline-none",
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
        passwordWrapper:
          "border flex justify-end items-center relative border-gray-300 w-full py-2 px-2 rounded-lg",
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
    <Card className=" h-fit sm:w-[420px] relative">
      <FormWizBadge />
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-start">
          Welcome Back
        </CardTitle>
        <div className="text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-blue-600 font-semibold">
            Sign up here
          </a>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="py-6 flex flex-col gap-6">
        <Formwix
          config={config}
          theme={{
            submitButton:
              "bg-black text-white w-full py-2 rounded-lg disabled:cursor-not-allowed",
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

"use client";
import FormWizBadge from "@/components/shared/FormwizBadge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Formwiz,
  TypeFieldConfig,
  TypeFormConfig,
  TypeFormData,
} from "formwiz";
import "formwiz/dist/formwiz.css";
import { toast } from "sonner";
export default function DemoFrom({ fields }: { fields: TypeFieldConfig[] }) {
  const config: TypeFormConfig = {
    fields,
    submitButtonLabel: "Login",
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
    <Card className="w-[95%] sm:w-[500px] relative">
      <FormWizBadge />
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-start">
          Welcome Back
        </CardTitle>
        <div className="text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 font-semibold">
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

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
import { toast } from "sonner";
import "formwiz/dist/formwiz.css";
export default function DemoContactForm() {
  const fields: TypeFieldConfig[] = [
    {
      type: "text",
      name: "name",
      label: "Name",
      placeholder: "Your name",
      validation: {
        required: { value: true, message: "Name is required" },
      },
    },
    {
      type: "email",
      name: "email",
      label: "Email",
      placeholder: "Your email address",
      validation: {
        required: { value: true, message: "Email is required" },
      },
    },
    {
      type: "select",
      name: "subject",
      label: "Subject",
      options: [
        { label: "General Inquiry", value: "general" },
        { label: "Technical Support", value: "support" },
        { label: "Sales", value: "sales" },
        { label: "Feedback", value: "feedback" },
        { label: "Other", value: "other" },
      ],
      validation: {
        required: { value: true, message: "Please select a subject" },
      },
    },
    {
      type: "textarea",
      name: "message",
      label: "Message",
      placeholder: "Your message",
      rows: 6,
      validation: {
        required: { value: true, message: "Message is required" },
        minLength: {
          value: 10,
          message: "Please provide a more detailed message",
        },
      },
    },
    {
      type: "checkbox",
      name: "newsletter",
      label: "Subscribe to our newsletter",
      theme: {
        checkBoxLabel: "text-sm text-gray-800 font-semibold",
      },
    },
  ];

  const config: TypeFormConfig = {
    fields,
    submitButtonLabel: "Submit",
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
    <Card className="w-[95%] h-fit sm:w-[450px] relative">
      <FormWizBadge />
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-start">
          Contact Us
        </CardTitle>
        <div className="text-sm text-gray-500">
          We will get back to you as soon as possible
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="py-6 flex flex-col gap-6">
        <Formwiz
          config={config}
          theme={{
            submitButton: "bg-black text-white w-full py-2 rounded-lg",
          }}
        />
      </CardContent>
    </Card>
  );
}

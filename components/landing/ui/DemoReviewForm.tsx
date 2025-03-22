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
export default function ProductReviewForm() {
  const fields: TypeFieldConfig[] = [
    {
      type: "text",
      label: "Name",
      name: "name",
      placeholder: "Your name",
      validation: {
        required: { value: true, message: "Name is required" },
      },
    },
    {
      type: "radio",
      label: "Rate Us !",
      name: "rating",
      options: [
        { label: "⭐", value: "1" },
        { label: "⭐⭐", value: "2" },
        { label: "⭐⭐⭐", value: "3" },
        { label: "⭐⭐⭐⭐", value: "4" },
        { label: "⭐⭐⭐⭐⭐", value: "5" },
      ],
      validation: {
        required: { value: true, message: "Please select a rating" },
      },
    },
    {
      type: "textarea",
      label: "Your Review",
      name: "review",
      placeholder: "Tell us what you think",
      rows: 3,
      validation: {
        required: { value: true, message: "Review cannot be empty" },
      },
    },
  ];

  const config: TypeFormConfig = {
    fields,
    submitButtonLabel: "Submit Review",
    onSubmit: (values: TypeFormData, { reset }) => {
      toast(
        <div className="flex flex-col w-full gap-2">
          <h2>Thank you for your review!</h2>
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
    <Card className="w-[95%] h-fit sm:w-[500px] relative">
      <FormWizBadge />
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-start">
          Product Review
        </CardTitle>
        <div className="text-sm text-gray-500">
          Share your experience with formwix
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="py-6 flex flex-col gap-6">
        <Formwix
          config={config}
          theme={{
            text: "border border-gray-300 w-full py-2 px-2 rounded-lg outline-none",
            email:
              "border border-gray-300 w-full py-2 px-2 rounded-lg outline-none",
            textarea:
              "border border-gray-300 w-full py-2 px-2 rounded-lg outline-none",
            submitButton: "bg-black text-white w-full py-2 rounded-lg",
          }}
        />
      </CardContent>
      <CardFooter>
        <div className="text-sm w-full text-center text-gray-700">
          We value your honest feedback
        </div>
      </CardFooter>
    </Card>
  );
}

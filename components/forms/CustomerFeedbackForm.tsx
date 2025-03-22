"use client";
import { Formwix, TypeFieldConfig, TypeFormData } from "formwix";
import "formwix/dist/formwix.css";
export default function CustomerFeedbackForm() {
  const fields: TypeFieldConfig[] = [
    {
      type: "text",
      name: "name",
      label: "Your Name",
      placeholder: "Enter your full name",
      validation: {
        required: { value: true, message: "Name is required" },
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
      type: "select",
      name: "productPurchased",
      label: "Product/Service Used",
      options: [
        { label: "Product A", value: "productA" },
        { label: "Product B", value: "productB" },
        { label: "Service X", value: "serviceX" },
        { label: "Service Y", value: "serviceY" },
        { label: "Other", value: "other" },
      ],
      validation: {
        required: { value: true, message: "Please select a product/service" },
      },
    },
    {
      type: "radio",
      name: "satisfaction",
      label: "Overall Satisfaction",
      options: [
        { label: "Very Satisfied", value: "5" },
        { label: "Satisfied", value: "4" },
        { label: "Neutral", value: "3" },
        { label: "Dissatisfied", value: "2" },
        { label: "Very Dissatisfied", value: "1" },
      ],
      validation: {
        required: { value: true, message: "Please rate your satisfaction" },
      },
    },
    {
      type: "multiselect",
      name: "improvements",
      label: "Areas for Improvement",
      options: [
        { label: "Product Quality", value: "quality" },
        { label: "Customer Service", value: "service" },
        { label: "Price", value: "price" },
        { label: "User Experience", value: "ux" },
        { label: "Delivery Speed", value: "delivery" },
      ],
    },
    {
      type: "textarea",
      name: "comments",
      label: "Additional Comments",
      placeholder: "Please share any additional feedback",
      rows: 5,
      validation: {
        maxLength: {
          value: 1000,
          message: "Comments must be at most 1000 characters",
        },
      },
    },
    {
      type: "checkbox",
      name: "contactConsent",
      label: "I consent to being contacted about my feedback",
    },
    {
      type: "date",
      name: "purchaseDate",
      label: "Date of Purchase",
      validation: {
        maxDate: {
          value: new Date().toISOString().split("T")[0],
          message: "Purchase date cannot be in the future",
        },
      },
    },
  ];

  const formConfig = {
    onSubmit: (data: TypeFormData) => {
      console.log("Feedback submitted:", data);
    },
    defaultValues: {
      satisfaction: "4",
      contactConsent: false,
    },
    fields,
  };

  return (
    <main className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Customer Feedback</h1>
      <Formwix config={formConfig} />
    </main>
  );
}

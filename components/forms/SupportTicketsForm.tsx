"use client";
import { Formwiz, TypeFieldConfig, TypeFormData } from "formwiz";
import "formwiz/dist/formwiz.css";
export default function SupportTicketForm() {
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
      type: "text",
      name: "orderNumber",
      label: "Order/Account Number",
      placeholder: "Enter your order or account number if applicable",
    },
    {
      type: "select",
      name: "issueCategory",
      label: "Issue Category",
      options: [
        { label: "Technical Issue", value: "technical" },
        { label: "Billing Problem", value: "billing" },
        { label: "Account Access", value: "account" },
        { label: "Product Question", value: "product" },
        { label: "Return/Refund", value: "return" },
        { label: "Other", value: "other" },
      ],
      validation: {
        required: { value: true, message: "Please select an issue category" },
      },
    },
    {
      type: "select",
      name: "priority",
      label: "Priority Level",
      options: [
        { label: "Low", value: "low" },
        { label: "Medium", value: "medium" },
        { label: "High", value: "high" },
        { label: "Critical", value: "critical" },
      ],
      validation: {
        required: { value: true, message: "Please select a priority level" },
      },
    },
    {
      type: "text",
      name: "subject",
      label: "Subject",
      placeholder: "Brief description of the issue",
      validation: {
        required: { value: true, message: "Subject is required" },
        maxLength: {
          value: 100,
          message: "Subject must be at most 100 characters",
        },
      },
    },
    {
      type: "textarea",
      name: "description",
      label: "Detailed Description",
      placeholder: "Please describe your issue in detail",
      rows: 6,
      validation: {
        required: { value: true, message: "Description is required" },
        minLength: {
          value: 30,
          message: "Please provide more details (at least 30 characters)",
        },
      },
    },
    {
      type: "multiselect",
      name: "attemptedSolutions",
      label: "Steps Already Taken",
      options: [
        { label: "Restarted device/application", value: "restart" },
        { label: "Cleared cache/cookies", value: "clear" },
        { label: "Updated software", value: "update" },
        { label: "Checked help documentation", value: "docs" },
        { label: "Contacted support previously", value: "previous" },
      ],
    },
    {
      type: "checkbox",
      name: "acknowledgment",
      label:
        "I understand that support tickets are handled in order of priority and submission time",
      validation: {
        required: {
          value: true,
          message: "Please acknowledge this information",
        },
      },
    },
    {
      type: "checkbox",
      name: "fileAttached",
      label:
        "I will attach relevant files (screenshots, logs) after submission",
    },
  ];

  const formConfig = {
    onSubmit: (data: TypeFormData) => {
      console.log("Support ticket submitted:", data);
    },
    defaultValues: {
      priority: "medium",
      acknowledgment: false,
      fileAttached: false,
    },
    fields,
  };

  return (
    <main className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Support Ticket</h1>
      <Formwiz config={formConfig} />
    </main>
  );
}

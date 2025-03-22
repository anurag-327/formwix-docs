"use client";
import { Formwix, TypeFieldConfig, TypeFormData } from "formwix";
import "formwix/dist/formwix.css";
export default function NewsletterSignupForm() {
  const fields: TypeFieldConfig[] = [
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      placeholder: "Enter your first name",
      validation: {
        required: { value: true, message: "First name is required" },
      },
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      placeholder: "Enter your last name",
      validation: {
        required: { value: true, message: "Last name is required" },
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
      name: "country",
      label: "Country",
      options: [
        { label: "United States", value: "us" },
        { label: "Canada", value: "ca" },
        { label: "United Kingdom", value: "uk" },
        { label: "Australia", value: "au" },
        { label: "Germany", value: "de" },
        { label: "France", value: "fr" },
        { label: "Other", value: "other" },
      ],
    },
    {
      type: "multiselect",
      name: "interests",
      label: "Interests",
      options: [
        { label: "Technology", value: "tech" },
        { label: "Business", value: "business" },
        { label: "Health & Wellness", value: "health" },
        { label: "Food & Cooking", value: "food" },
        { label: "Travel", value: "travel" },
        { label: "Finance", value: "finance" },
        { label: "Entertainment", value: "entertainment" },
      ],
      validation: {
        required: {
          value: true,
          message: "Please select at least one interest",
        },
      },
    },
    {
      type: "radio",
      name: "frequency",
      label: "Newsletter Frequency",
      options: [
        { label: "Daily", value: "daily" },
        { label: "Weekly", value: "weekly" },
        { label: "Monthly", value: "monthly" },
      ],
      validation: {
        required: { value: true, message: "Please select a frequency" },
      },
    },
    {
      type: "select",
      name: "format",
      label: "Preferred Format",
      options: [
        { label: "HTML (Rich graphics and formatting)", value: "html" },
        { label: "Plain Text (Simple, lightweight emails)", value: "plain" },
      ],
      validation: {
        required: { value: true, message: "Please select a format" },
      },
    },
    {
      type: "checkbox",
      name: "promotionalEmails",
      label: "I also want to receive promotional emails",
    },
    {
      type: "checkbox",
      name: "termsAgreement",
      label: "I agree to the terms and privacy policy",
      validation: {
        required: {
          value: true,
          message: "You must agree to the terms and privacy policy",
        },
      },
    },
    {
      type: "textarea",
      name: "additionalInfo",
      label: "Additional Information",
      placeholder: "Is there anything else you'd like us to know?",
      rows: 3,
    },
  ];

  const formConfig = {
    onSubmit: (data: TypeFormData) => {
      console.log("Newsletter signup submitted:", data);
    },
    defaultValues: {
      country: "us",
      frequency: "weekly",
      format: "html",
      promotionalEmails: false,
      termsAgreement: false,
    },
    fields,
  };

  return (
    <main className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Newsletter Signup</h1>
      <Formwix config={formConfig} />
    </main>
  );
}

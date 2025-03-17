"use client";
import { Formwiz, TypeFieldConfig, TypeFormData } from "formwiz";
import "formwiz/dist/formwiz.css";
export default function SubscriptionForm() {
  const fields: TypeFieldConfig[] = [
    {
      type: "radio",
      name: "plan",
      label: "Select Your Plan",
      options: [
        {
          label:
            "Basic - $9.99/month\nIncludes basic features with limited access",
          value: "basic",
        },
        {
          label:
            "Premium - $19.99/month\nIncludes all features with priority support",
          value: "premium",
        },
        {
          label:
            "Pro - $29.99/month\nIncludes all features, priority support, and advanced analytics",
          value: "pro",
        },
      ],
      validation: {
        required: { value: true, message: "Please select a plan" },
      },
    },
    {
      type: "radio",
      name: "billingCycle",
      label: "Billing Cycle",
      options: [
        { label: "Monthly", value: "monthly" },
        { label: "Annual (Save 20%)", value: "annual" },
      ],
      validation: {
        required: { value: true, message: "Please select a billing cycle" },
      },
    },
    {
      type: "text",
      name: "fullName",
      label: "Full Name",
      validation: {
        required: { value: true, message: "Full name is required" },
      },
    },
    {
      type: "email",
      name: "email",
      label: "Email Address",
      validation: {
        required: { value: true, message: "Email is required" },
      },
    },
    {
      type: "text",
      name: "cardNumber",
      label: "Card Number",
      placeholder: "XXXX XXXX XXXX XXXX",
      validation: {
        required: { value: true, message: "Card number is required" },
        pattern: {
          value: /^[\d\s]{16,19}$/,
          message: "Please enter a valid card number",
        },
      },
    },
    {
      type: "text",
      name: "cardExpiry",
      label: "Expiration Date",
      placeholder: "MM/YY",
      validation: {
        required: { value: true, message: "Expiration date is required" },
        pattern: {
          value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
          message: "Please enter a valid expiration date (MM/YY)",
        },
      },
    },
    {
      type: "text",
      name: "cardCvc",
      label: "CVC",
      placeholder: "3-4 digits",
      validation: {
        required: { value: true, message: "CVC is required" },
        pattern: {
          value: /^[0-9]{3,4}$/,
          message: "Please enter a valid CVC",
        },
      },
    },
    {
      type: "text",
      name: "zipCode",
      label: "Billing Zip/Postal Code",
      validation: {
        required: { value: true, message: "Zip code is required" },
      },
    },
    {
      type: "checkbox",
      name: "autoRenew",
      label: "Automatically renew my subscription",
    },
    {
      type: "checkbox",
      name: "termsAndConditions",
      label: "I agree to the terms of service and subscription policy",
      validation: {
        required: {
          value: true,
          message: "You must agree to the terms and conditions",
        },
      },
    },
    {
      type: "checkbox",
      name: "promotions",
      label: "I would like to receive promotional emails",
    },
  ];

  const formConfig = {
    onSubmit: (data: TypeFormData) => {
      console.log("Subscription data:", data);
      // Handle subscription sign-up here
    },
    defaultValues: {
      plan: "",
      billingCycle: "monthly",
      fullName: "",
      email: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvc: "",
      zipCode: "",
      autoRenew: true,
      termsAndConditions: false,
      promotions: false,
    },
    fields,
    submitText: "Subscribe Now",
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Choose Your Subscription
      </h2>
      <p className="mb-6 text-center text-gray-600">
        Select the plan that works best for you
      </p>
      <Formwiz config={formConfig} />
    </div>
  );
}

"use client";
import { Formwiz, TypeFieldConfig, TypeFormData } from "formwiz";
import "formwiz/dist/formwiz.css";
export default function CheckoutForm() {
  const fields: TypeFieldConfig[] = [
    {
      type: "text",
      name: "fullName",
      label: "Full Name",
      placeholder: "As it appears on your card",
      validation: {
        required: { value: true, message: "Full name is required" },
      },
    },
    {
      type: "email",
      name: "email",
      label: "Email Address",
      placeholder: "For receipt and order updates",
      validation: {
        required: { value: true, message: "Email is required" },
      },
    },
    {
      type: "text",
      name: "address",
      label: "Shipping Address",
      placeholder: "Street address",
      validation: {
        required: { value: true, message: "Address is required" },
      },
    },
    {
      type: "text",
      name: "city",
      label: "City",
      validation: {
        required: { value: true, message: "City is required" },
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
      ],
      validation: {
        required: { value: true, message: "Country is required" },
      },
    },
    {
      type: "text",
      name: "zipCode",
      label: "Zip/Postal Code",
      validation: {
        required: { value: true, message: "Zip code is required" },
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
      type: "checkbox",
      name: "saveInfo",
      label: "Save my information for faster checkout next time",
    },
    {
      type: "checkbox",
      name: "agreeTerms",
      label: "I agree to the terms of service and privacy policy",
      validation: {
        required: {
          value: true,
          message: "You must agree to the terms to continue",
        },
      },
    },
  ];

  const formConfig = {
    onSubmit: (data: TypeFormData) => {
      console.log("Checkout data:", data);
      // Handle payment processing here
    },
    defaultValues: {
      fullName: "",
      email: "",
      address: "",
      city: "",
      country: "",
      zipCode: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvc: "",
      saveInfo: false,
      agreeTerms: false,
    },
    fields,
    submitText: "Complete Purchase",
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
      <Formwiz config={formConfig} />
    </div>
  );
}

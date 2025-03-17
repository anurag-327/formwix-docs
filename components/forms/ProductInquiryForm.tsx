"use client";
import { Formwiz, TypeFieldConfig, TypeFormData } from "formwiz";
import "formwiz/dist/formwiz.css";
export default function ProductInquiryForm() {
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
    // {
    //   type: "tel",
    //   name: "phone",
    //   label: "Phone Number",
    //   placeholder: "Enter your phone number",
    //   validation: {
    //     pattern: {
    //       value: /^[0-9+\-\s()]*$/,
    //       message: "Please enter a valid phone number"
    //     }
    //   }
    // },
    {
      type: "select",
      name: "productCategory",
      label: "Product Category",
      options: [
        { label: "Electronics", value: "electronics" },
        { label: "Furniture", value: "furniture" },
        { label: "Clothing", value: "clothing" },
        { label: "Home Appliances", value: "appliances" },
        { label: "Other", value: "other" },
      ],
      validation: {
        required: { value: true, message: "Please select a product category" },
      },
    },
    {
      type: "text",
      name: "productName",
      label: "Product Name/Model",
      placeholder: "Enter the product name or model number",
      validation: {
        required: { value: true, message: "Product name/model is required" },
      },
    },
    {
      type: "radio",
      name: "inquiryType",
      label: "Inquiry Type",
      options: [
        { label: "Price Inquiry", value: "price" },
        { label: "Availability", value: "availability" },
        { label: "Technical Specifications", value: "specs" },
        { label: "Warranty Information", value: "warranty" },
        { label: "Other", value: "other" },
      ],
      validation: {
        required: { value: true, message: "Please select an inquiry type" },
      },
    },
    {
      type: "textarea",
      name: "inquiryDetails",
      label: "Inquiry Details",
      placeholder: "Please provide details about your inquiry",
      rows: 4,
      validation: {
        required: { value: true, message: "Inquiry details are required" },
        maxLength: {
          value: 800,
          message: "Inquiry details must be at most 800 characters",
        },
      },
    },
    {
      type: "select",
      name: "preferredContactMethod",
      label: "Preferred Contact Method",
      options: [
        { label: "Email", value: "email" },
        { label: "Phone", value: "phone" },
        { label: "Either", value: "either" },
      ],
      validation: {
        required: { value: true, message: "Please select a contact method" },
      },
    },
    {
      type: "checkbox",
      name: "urgentInquiry",
      label: "This is an urgent inquiry",
    },
    {
      type: "checkbox",
      name: "marketingConsent",
      label: "I agree to receive marketing communications",
    },
  ];

  const formConfig = {
    onSubmit: (data: TypeFormData) => {
      console.log("Product inquiry submitted:", data);
    },
    defaultValues: {
      preferredContactMethod: "email",
      urgentInquiry: false,
      marketingConsent: false,
    },
    fields,
  };

  return (
    <main className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Product Inquiry</h1>
      <Formwiz config={formConfig} />
    </main>
  );
}

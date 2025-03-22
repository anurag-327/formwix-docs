"use client";
import { Formwix, TypeFieldConfig, TypeFormData } from "formwix";
import "formwix/dist/formwix.css";
export default function ProductReviewForm() {
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
      label: "Order Number",
      placeholder: "Enter your order number (optional)",
    },
    {
      type: "text",
      name: "productName",
      label: "Product Name",
      placeholder: "Enter the product name",
      validation: {
        required: { value: true, message: "Product name is required" },
      },
    },
    {
      type: "radio",
      name: "rating",
      label: "Overall Rating",
      options: [
        { label: "5 Stars - Excellent", value: "5" },
        { label: "4 Stars - Good", value: "4" },
        { label: "3 Stars - Average", value: "3" },
        { label: "2 Stars - Below Average", value: "2" },
        { label: "1 Star - Poor", value: "1" },
      ],
      validation: {
        required: { value: true, message: "Rating is required" },
      },
    },
    {
      type: "text",
      name: "reviewTitle",
      label: "Review Title",
      placeholder: "Summarize your review in a short title",
      validation: {
        required: { value: true, message: "Review title is required" },
        maxLength: {
          value: 100,
          message: "Title must be at most 100 characters",
        },
      },
    },
    {
      type: "textarea",
      name: "reviewContent",
      label: "Review Content",
      placeholder: "Write your detailed review here",
      rows: 6,
      validation: {
        required: { value: true, message: "Review content is required" },
        minLength: {
          value: 50,
          message: "Review must be at least 50 characters long",
        },
      },
    },
    {
      type: "multiselect",
      name: "productHighlights",
      label: "Product Highlights",
      options: [
        { label: "Quality", value: "quality" },
        { label: "Value for Money", value: "value" },
        { label: "Design", value: "design" },
        { label: "Ease of Use", value: "easeOfUse" },
        { label: "Performance", value: "performance" },
        { label: "Customer Service", value: "service" },
      ],
    },
    {
      type: "radio",
      name: "recommendProduct",
      label: "Would you recommend this product?",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
        { label: "Not sure", value: "notSure" },
      ],
      validation: {
        required: {
          value: true,
          message: "Please indicate if you would recommend this product",
        },
      },
    },
    {
      type: "date",
      name: "purchaseDate",
      label: "Purchase Date",
      validation: {
        maxDate: {
          value: new Date().toISOString().split("T")[0],
          message: "Purchase date cannot be in the future",
        },
      },
    },
    {
      type: "radio",
      name: "usageDuration",
      label: "How long have you used this product?",
      options: [
        { label: "Less than a week", value: "lessThanWeek" },
        { label: "1-4 weeks", value: "1to4weeks" },
        { label: "1-3 months", value: "1to3months" },
        { label: "3-6 months", value: "3to6months" },
        { label: "6-12 months", value: "6to12months" },
        { label: "More than a year", value: "moreThanYear" },
      ],
    },
    {
      type: "textarea",
      name: "improvement",
      label: "What could be improved?",
      placeholder: "Any suggestions for improving this product?",
      rows: 3,
    },
    {
      type: "checkbox",
      name: "verifiedPurchase",
      label: "I confirm this is a verified purchase",
    },
    {
      type: "checkbox",
      name: "termsAgreement",
      label: "I agree to the review guidelines and terms of service",
      validation: {
        required: {
          value: true,
          message: "You must agree to the review guidelines",
        },
      },
    },
  ];

  const formConfig = {
    onSubmit: (data: TypeFormData) => {
      console.log("Product review submitted:", data);
    },
    defaultValues: {
      rating: "5",
      recommendProduct: "yes",
      usageDuration: "1to4weeks",
      verifiedPurchase: true,
      termsAgreement: false,
    },
    fields,
  };

  return (
    <main className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Product Review</h1>
      <Formwix config={formConfig} />
    </main>
  );
}

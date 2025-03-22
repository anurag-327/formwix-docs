"use client";
import { Formwix, TypeFieldConfig, TypeFormData } from "formwix";
import "formwix/dist/formwix.css";
export default function SurveyForm() {
  const fields: TypeFieldConfig[] = [
    {
      type: "text",
      name: "name",
      label: "Name (Optional)",
      placeholder: "Your name",
    },
    {
      type: "email",
      name: "email",
      label: "Email (Optional)",
      placeholder: "Your email address",
    },
    {
      type: "radio",
      name: "satisfaction",
      label: "How satisfied are you with our service?",
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
      type: "select",
      name: "productUsed",
      label: "Which product or service did you use?",
      options: [
        { label: "Product A", value: "productA" },
        { label: "Product B", value: "productB" },
        { label: "Service X", value: "serviceX" },
        { label: "Service Y", value: "serviceY" },
        { label: "Other", value: "other" },
      ],
      validation: {
        required: {
          value: true,
          message: "Please select a product or service",
        },
      },
    },
    {
      type: "multiselect",
      name: "featuresUsed",
      label: "Which features did you use? (Select all that apply)",
      options: [
        { label: "Feature 1", value: "feature1" },
        { label: "Feature 2", value: "feature2" },
        { label: "Feature 3", value: "feature3" },
        { label: "Feature 4", value: "feature4" },
        { label: "Feature 5", value: "feature5" },
      ],
    },
    {
      type: "radio",
      name: "recommendation",
      label: "How likely are you to recommend us to others?",
      options: [
        { label: "Definitely would", value: "5" },
        { label: "Probably would", value: "4" },
        { label: "Not sure", value: "3" },
        { label: "Probably would not", value: "2" },
        { label: "Definitely would not", value: "1" },
      ],
      validation: {
        required: { value: true, message: "Please select an option" },
      },
    },
    {
      type: "textarea",
      name: "feedback",
      label: "What could we do to improve your experience?",
      placeholder: "Your feedback is valuable to us",
      rows: 5,
    },
    {
      type: "checkbox",
      name: "contactMe",
      label: "I am willing to be contacted about my feedback",
    },
  ];

  const formConfig = {
    onSubmit: (data: TypeFormData) => {
      console.log("Survey data:", data);
      // Handle survey submission here
    },
    defaultValues: {
      name: "",
      email: "",
      satisfaction: "",
      productUsed: "",
      featuresUsed: [],
      recommendation: "",
      feedback: "",
      contactMe: false,
    },
    fields,
    submitText: "Submit Survey",
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Customer Satisfaction Survey
      </h2>
      <p className="mb-6 text-center text-gray-600">
        Please help us improve our products and services by providing your
        feedback.
      </p>
      <Formwix config={formConfig} />
    </div>
  );
}

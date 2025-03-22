"use client";
import { Formwix, TypeFieldConfig, TypeFormData } from "formwix";
import "formwix/dist/formwix.css";
export default function ContactForm() {
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
    },
  ];

  const formConfig = {
    onSubmit: (data: TypeFormData) => {
      console.log("Contact form data:", data);
      // Handle contact form submission here
    },
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      newsletter: false,
    },
    fields,
    submitText: "Send Message",
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <p className="mb-6 text-center text-gray-600">
        Have a question or feedback? Fill out the form below and we&apos;ll get
        back to you as soon as possible.
      </p>
      <Formwix config={formConfig} />
    </div>
  );
}

"use client";
import { Formwiz, TypeFieldConfig, TypeFormData } from "formwiz";
import "formwiz/dist/formwiz.css";
export default function EventRegistrationForm() {
  const fields: TypeFieldConfig[] = [
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      validation: {
        required: { value: true, message: "First name is required" },
      },
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      validation: {
        required: { value: true, message: "Last name is required" },
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
      name: "phone",
      label: "Phone Number",
      validation: {
        pattern: {
          value: /^[\d\+\-\(\) ]{10,15}$/,
          message: "Please enter a valid phone number",
        },
      },
    },
    {
      type: "select",
      name: "ticketType",
      label: "Ticket Type",
      options: [
        { label: "General Admission ($50)", value: "general" },
        { label: "VIP ($150)", value: "vip" },
        { label: "Premium ($250)", value: "premium" },
        { label: "Student ($25)", value: "student" },
      ],
      validation: {
        required: { value: true, message: "Please select a ticket type" },
      },
    },
    {
      type: "number",
      name: "quantity",
      label: "Number of Tickets",
      validation: {
        required: { value: true, message: "Number of tickets is required" },
        min: { value: 1, message: "Minimum 1 ticket required" },
        max: {
          value: 10,
          message: "Maximum 10 tickets allowed per transaction",
        },
      },
    },
    {
      type: "select",
      name: "workshopSession",
      label: "Workshop Session (Optional)",
      options: [
        { label: "None", value: "none" },
        { label: "Morning: Introduction to AI", value: "morning-ai" },
        { label: "Afternoon: Advanced React", value: "afternoon-react" },
        { label: "Evening: Networking Session", value: "evening-networking" },
      ],
    },
    {
      type: "checkbox",
      name: "dietaryRestrictions",
      label: "Do you have any dietary restrictions?",
    },
    {
      type: "textarea",
      name: "dietaryDetails",
      label: "Please specify your dietary restrictions",
      placeholder: "E.g., vegetarian, gluten-free, allergies",
      rows: 3,
    },
    {
      type: "checkbox",
      name: "accessibility",
      label: "Do you require any accessibility accommodations?",
    },
    {
      type: "textarea",
      name: "accessibilityDetails",
      label: "Please specify your accessibility needs",
      placeholder: "Let us know how we can better accommodate you",
      rows: 3,
    },
    {
      type: "radio",
      name: "howDidYouHear",
      label: "How did you hear about this event?",
      options: [
        { label: "Social Media", value: "social" },
        { label: "Email", value: "email" },
        { label: "Website", value: "website" },
        { label: "Friend/Colleague", value: "referral" },
        { label: "Other", value: "other" },
      ],
    },
    {
      type: "checkbox",
      name: "termsAndConditions",
      label: "I agree to the terms and conditions",
      validation: {
        required: {
          value: true,
          message: "You must agree to the terms and conditions",
        },
      },
    },
    {
      type: "checkbox",
      name: "futureEvents",
      label: "Keep me informed about future events",
    },
  ];

  const formConfig = {
    onSubmit: (data: TypeFormData) => {
      console.log("Event registration data:", data);
      // Handle event registration here
    },
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      ticketType: "",
      quantity: 1,
      workshopSession: "none",
      dietaryRestrictions: false,
      dietaryDetails: "",
      accessibility: false,
      accessibilityDetails: "",
      howDidYouHear: "",
      termsAndConditions: false,
      futureEvents: true,
    },
    fields,
    submitText: "Register Now",
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Event Registration
      </h2>
      <p className="mb-6 text-center text-gray-600">
        Join us for our annual conference on February 15-17, 2025
      </p>
      <Formwiz config={formConfig} />
    </div>
  );
}

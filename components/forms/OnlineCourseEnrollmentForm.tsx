"use client";
import { Formwiz, TypeFieldConfig, TypeFormData } from "formwiz";
import "formwiz/dist/formwiz.css";
export default function CourseEnrollmentForm() {
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
      type: "text",
      name: "phone",
      label: "Phone Number",
      placeholder: "Enter your phone number",
      validation: {
        pattern: {
          value: /^[0-9+\-\s()]*$/,
          message: "Please enter a valid phone number",
        },
      },
    },
    {
      type: "date",
      name: "dob",
      label: "Date of Birth",
      validation: {
        required: { value: true, message: "Date of birth is required" },
        maxDate: {
          value: new Date().toISOString().split("T")[0],
          message: "Date cannot be in the future",
        },
      },
    },
    {
      type: "select",
      name: "educationLevel",
      label: "Highest Education Level",
      options: [
        { label: "High School", value: "highSchool" },
        { label: "Associate's Degree", value: "associates" },
        { label: "Bachelor's Degree", value: "bachelors" },
        { label: "Master's Degree", value: "masters" },
        { label: "Doctorate", value: "doctorate" },
        { label: "Other", value: "other" },
      ],
      validation: {
        required: { value: true, message: "Education level is required" },
      },
    },
    {
      type: "select",
      name: "course",
      label: "Course Selection",
      options: [
        { label: "Introduction to Programming", value: "introProgramming" },
        { label: "Web Development Fundamentals", value: "webDev" },
        { label: "Data Science Essentials", value: "dataScience" },
        { label: "Digital Marketing Basics", value: "digitalMarketing" },
        { label: "Graphic Design Principles", value: "graphicDesign" },
      ],
      validation: {
        required: { value: true, message: "Course selection is required" },
      },
    },
    {
      type: "select",
      name: "startDate",
      label: "Preferred Start Date",
      options: [
        { label: "March 1, 2025", value: "2025-03-01" },
        { label: "April 15, 2025", value: "2025-04-15" },
        { label: "June 1, 2025", value: "2025-06-01" },
        { label: "September 1, 2025", value: "2025-09-01" },
      ],
      validation: {
        required: { value: true, message: "Start date selection is required" },
      },
    },
    {
      type: "radio",
      name: "courseFormat",
      label: "Preferred Course Format",
      options: [
        { label: "Self-paced", value: "selfPaced" },
        { label: "Live Online Classes", value: "liveOnline" },
        {
          label: "Hybrid (Self-paced with Weekly Live Sessions)",
          value: "hybrid",
        },
      ],
      validation: {
        required: {
          value: true,
          message: "Course format selection is required",
        },
      },
    },
    {
      type: "textarea",
      name: "goals",
      label: "Learning Goals",
      placeholder: "What do you hope to achieve through this course?",
      rows: 4,
      validation: {
        required: { value: true, message: "Learning goals are required" },
        minLength: {
          value: 30,
          message: "Please provide more details (at least 30 characters)",
        },
      },
    },
    {
      type: "multiselect",
      name: "howHeard",
      label: "How did you hear about us?",
      options: [
        { label: "Search Engine", value: "search" },
        { label: "Social Media", value: "social" },
        { label: "Friend/Referral", value: "referral" },
        { label: "Advertisement", value: "ad" },
        { label: "Email", value: "email" },
      ],
    },
    {
      type: "select",
      name: "paymentMethod",
      label: "Payment Method",
      options: [
        { label: "Credit Card", value: "creditCard" },
        { label: "PayPal", value: "paypal" },
        { label: "Bank Transfer", value: "bankTransfer" },
        { label: "Payment Plan", value: "paymentPlan" },
      ],
      validation: {
        required: { value: true, message: "Payment method is required" },
      },
    },
    {
      type: "checkbox",
      name: "specialAccommodations",
      label: "I require special accommodations",
    },
    {
      type: "textarea",
      name: "accommodationDetails",
      label: "Accommodation Details",
      placeholder: "Please describe any special accommodations you require",
      rows: 3,
      //   validation: {
      //     dependsOn: {
      //       field: "specialAccommodations",
      //       condition: (value) => value === true,
      //       message: "Please provide accommodation details",
      //     },
      //   },
    },
    {
      type: "checkbox",
      name: "termsAgreement",
      label: "I agree to the terms and conditions of enrollment",
      validation: {
        required: {
          value: true,
          message: "You must agree to the terms and conditions",
        },
      },
    },
  ];

  const formConfig = {
    onSubmit: (data: TypeFormData) => {
      console.log("Course enrollment submitted:", data);
    },
    defaultValues: {
      courseFormat: "liveOnline",
      specialAccommodations: false,
      termsAgreement: false,
    },
    fields,
  };

  return (
    <main className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Course Enrollment</h1>
      <Formwiz config={formConfig} />
    </main>
  );
}

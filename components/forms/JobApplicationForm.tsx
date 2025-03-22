"use client";
import { Formwix, TypeFieldConfig, TypeFormData } from "formwix";
import "formwix/dist/formwix.css";
export default function JobApplicationForm() {
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
        required: { value: true, message: "Phone number is required" },
        pattern: {
          value: "/^[\d\+\-\(\) ]{10,15}$/",
          message: "Please enter a valid phone number",
        },
      },
    },
    {
      type: "select",
      name: "position",
      label: "Position Applied For",
      options: [
        { label: "Software Engineer", value: "software-engineer" },
        { label: "UX Designer", value: "ux-designer" },
        { label: "Product Manager", value: "product-manager" },
        { label: "Marketing Specialist", value: "marketing-specialist" },
        { label: "Customer Support", value: "customer-support" },
      ],
      validation: {
        required: { value: true, message: "Please select a position" },
      },
    },
    {
      type: "multiselect",
      name: "skills",
      label: "Skills (Select all that apply)",
      options: [
        { label: "JavaScript", value: "javascript" },
        { label: "TypeScript", value: "typescript" },
        { label: "React", value: "react" },
        { label: "Node.js", value: "nodejs" },
        { label: "Python", value: "python" },
        { label: "UI/UX Design", value: "ui-ux" },
        { label: "Project Management", value: "project-management" },
        { label: "Communication", value: "communication" },
      ],
      validation: {
        required: { value: true, message: "Please select at least one skill" },
      },
    },
    {
      type: "textarea",
      name: "experience",
      label: "Relevant Experience",
      rows: 5,
      validation: {
        required: { value: true, message: "Please describe your experience" },
        minLength: {
          value: 50,
          message: "Please provide more details about your experience",
        },
      },
    },
    {
      type: "date",
      name: "availableStartDate",
      label: "Available Start Date",
      validation: {
        required: { value: true, message: "Start date is required" },
      },
    },
    {
      type: "select",
      name: "educationLevel",
      label: "Highest Education Level",
      options: [
        { label: "High School", value: "high-school" },
        { label: "Associate's Degree", value: "associates" },
        { label: "Bachelor's Degree", value: "bachelors" },
        { label: "Master's Degree", value: "masters" },
        { label: "Doctorate", value: "doctorate" },
      ],
      validation: {
        required: { value: true, message: "Education level is required" },
      },
    },
    {
      type: "textarea",
      name: "coverLetter",
      label: "Cover Letter",
      rows: 7,
      validation: {
        required: { value: true, message: "Cover letter is required" },
      },
    },
    {
      type: "radio",
      name: "howDidYouHear",
      label: "How did you hear about this position?",
      options: [
        { label: "Company Website", value: "website" },
        { label: "Job Board", value: "job-board" },
        { label: "Referral", value: "referral" },
        { label: "Social Media", value: "social-media" },
        { label: "Other", value: "other" },
      ],
      validation: {
        required: { value: true, message: "Please select an option" },
      },
    },
    {
      type: "checkbox",
      name: "legallyAuthorized",
      label: "I am legally authorized to work in this country",
      validation: {
        required: {
          value: true,
          message: "You must confirm your work authorization status",
        },
      },
    },
    {
      type: "checkbox",
      name: "agreeToTerms",
      label: "I certify that all information provided is true and complete",
      validation: {
        required: {
          value: true,
          message: "You must agree to this statement",
        },
      },
    },
  ];

  const formConfig = {
    onSubmit: (data: TypeFormData) => {
      console.log("Job application data:", data);
      // Handle job application submission here
    },
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      skills: [],
      experience: "",
      availableStartDate: "",
      educationLevel: "",
      coverLetter: "",
      howDidYouHear: "",
      legallyAuthorized: false,
      agreeToTerms: false,
    },
    fields,
    submitText: "Submit Application",
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Job Application</h2>
      <p className="mb-6 text-center text-gray-600">
        Please fill out all required fields to apply for this position.
      </p>
      <Formwix config={formConfig} />
    </div>
  );
}

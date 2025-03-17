"use client";
import { Formwiz, TypeFieldConfig, TypeFormData } from "formwiz";
import "formwiz/dist/formwiz.css";
export default function LoanApplicationForm() {
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
        required: { value: true, message: "Phone number is required" },
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
      type: "text",
      name: "ssn",
      label: "Social Security Number",
      placeholder: "XXX-XX-XXXX",
      validation: {
        required: { value: true, message: "SSN is required" },
        pattern: {
          value: /^\d{3}-\d{2}-\d{4}$/,
          message: "Please enter a valid SSN (XXX-XX-XXXX)",
        },
      },
    },
    {
      type: "text",
      name: "address",
      label: "Street Address",
      placeholder: "Enter your street address",
      validation: {
        required: { value: true, message: "Street address is required" },
      },
    },
    {
      type: "text",
      name: "city",
      label: "City",
      placeholder: "Enter your city",
      validation: {
        required: { value: true, message: "City is required" },
      },
    },
    {
      type: "text",
      name: "state",
      label: "State",
      placeholder: "Enter your state",
      validation: {
        required: { value: true, message: "State is required" },
      },
    },
    {
      type: "text",
      name: "zipCode",
      label: "Zip Code",
      placeholder: "Enter your zip code",
      validation: {
        required: { value: true, message: "Zip code is required" },
        pattern: {
          value: /^\d{5}(-\d{4})?$/,
          message: "Please enter a valid ZIP code",
        },
      },
    },
    {
      type: "select",
      name: "loanType",
      label: "Loan Type",
      options: [
        { label: "Personal Loan", value: "personal" },
        { label: "Mortgage", value: "mortgage" },
        { label: "Auto Loan", value: "auto" },
        { label: "Student Loan", value: "student" },
        { label: "Small Business Loan", value: "business" },
      ],
      validation: {
        required: { value: true, message: "Loan type is required" },
      },
    },
    {
      type: "number",
      name: "loanAmount",
      label: "Loan Amount ($)",
      placeholder: "Enter the loan amount",
      validation: {
        required: { value: true, message: "Loan amount is required" },
        min: { value: 1000, message: "Minimum loan amount is $1,000" },
        max: { value: 1000000, message: "Maximum loan amount is $1,000,000" },
      },
    },
    {
      type: "select",
      name: "loanTerm",
      label: "Loan Term",
      options: [
        { label: "12 months", value: "12" },
        { label: "24 months", value: "24" },
        { label: "36 months", value: "36" },
        { label: "48 months", value: "48" },
        { label: "60 months", value: "60" },
      ],
      validation: {
        required: { value: true, message: "Loan term is required" },
      },
    },
    {
      type: "number",
      name: "annualIncome",
      label: "Annual Income ($)",
      placeholder: "Enter your annual income",
      validation: {
        required: { value: true, message: "Annual income is required" },
        min: { value: 0, message: "Income cannot be negative" },
      },
    },
    {
      type: "select",
      name: "employmentStatus",
      label: "Employment Status",
      options: [
        { label: "Full-time", value: "fullTime" },
        { label: "Part-time", value: "partTime" },
        { label: "Self-employed", value: "selfEmployed" },
        { label: "Unemployed", value: "unemployed" },
        { label: "Retired", value: "retired" },
      ],
      validation: {
        required: { value: true, message: "Employment status is required" },
      },
    },
    {
      type: "text",
      name: "employer",
      label: "Employer Name",
      placeholder: "Enter your employer's name",
      validation: {
        // dependsOn: {
        //   field: "employmentStatus",
        //   condition: (value) => ["fullTime", "partTime"].includes(value),
        //   message: "Employer name is required"
        // }
      },
    },
    {
      type: "number",
      name: "yearsEmployed",
      label: "Years at Current Employer",
      placeholder: "Enter years at current employer",
      validation: {
        // dependsOn: {
        //   field: "employmentStatus",
        //   condition: (value) => ["fullTime", "partTime", "selfEmployed"].includes(value),
        //   message: "Years employed is required"
        // },
        min: { value: 0, message: "Cannot be negative" },
      },
    },
    {
      type: "radio",
      name: "creditScore",
      label: "Estimated Credit Score Range",
      options: [
        { label: "Excellent (720-850)", value: "excellent" },
        { label: "Good (690-719)", value: "good" },
        { label: "Fair (630-689)", value: "fair" },
        { label: "Poor (Below 630)", value: "poor" },
        { label: "Don't know", value: "unknown" },
      ],
      validation: {
        required: { value: true, message: "Credit score range is required" },
      },
    },
    {
      type: "textarea",
      name: "purposeOfLoan",
      label: "Purpose of Loan",
      placeholder: "Please describe how you plan to use the loan",
      rows: 4,
      validation: {
        required: { value: true, message: "Loan purpose is required" },
        minLength: {
          value: 50,
          message: "Please provide more details (at least 50 characters)",
        },
      },
    },
    {
      type: "checkbox",
      name: "otherLoans",
      label: "I have other outstanding loans",
    },
    {
      type: "number",
      name: "monthlyDebt",
      label: "Current Monthly Debt Payments ($)",
      placeholder: "Enter your current monthly debt payments",
      validation: {
        // dependsOn: {
        //   field: "otherLoans",
        //   condition: (value) => value === true,
        //   message: "Monthly debt payments are required"
        // },
        min: { value: 0, message: "Cannot be negative" },
      },
    },
    {
      type: "checkbox",
      name: "bankruptcyHistory",
      label: "I have filed for bankruptcy in the past 7 years",
    },
    {
      type: "checkbox",
      name: "termsAgreement",
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
      name: "creditCheck",
      label: "I authorize a credit check",
      validation: {
        required: {
          value: true,
          message: "You must authorize a credit check",
        },
      },
    },
  ];

  const formConfig = {
    onSubmit: (data: TypeFormData) => {
      console.log("Loan application submitted:", data);
    },
    defaultValues: {
      loanTerm: "36",
      creditScore: "unknown",
      otherLoans: false,
      bankruptcyHistory: false,
      termsAgreement: false,
      creditCheck: false,
    },
    fields,
  };

  return (
    <main className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Loan Application</h1>
      <Formwiz config={formConfig} />
    </main>
  );
}

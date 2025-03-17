import { TypeFieldConfig } from "formwiz";
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const tomorrowStr = tomorrow.toISOString().split("T")[0];

// Get date 3 months from now for max date validation
const threeMonthsLater = new Date();
threeMonthsLater.setMonth(threeMonthsLater.getMonth() + 3);
const threeMonthsLaterStr = threeMonthsLater.toISOString().split("T")[0];
type formConfig = {
  name: string;
  slug: string;
  description: string;
  fields: TypeFieldConfig[];
};
export const forms: formConfig[] = [
  {
    name: "Login Form",
    slug: "login",
    description: "A simple login form",
    fields: [
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
        type: "password",
        name: "password",
        label: "Password",
        placeholder: "Enter your password",
        validation: {
          required: { value: true, message: "Password is required" },
        },
      },
      {
        type: "checkbox",
        name: "rememberMe",
        label: "Remember me",
      },
    ],
  },
  {
    name: "Signup Form",
    slug: "signup",
    description: "A simple signup form",
    fields: [
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
        type: "password",
        name: "password",
        label: "Password",
        placeholder: "Create a password",
        validation: {
          required: { value: true, message: "Password is required" },
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
          containNumber: {
            value: true,
            message: "Password must contain at least one number",
          },
          containSpecialChar: {
            value: true,
            message: "Password must contain at least one special character",
          },
          containUpperCase: {
            value: true,
            message: "Password must contain at least one uppercase letter",
          },
          containLowerCase: {
            value: true,
            message: "Password must contain at least one lowercase letter",
          },
        },
      },
      {
        type: "password",
        name: "confirmPassword",
        label: "Confirm Password",
        placeholder: "Confirm your password",
        validation: {
          required: { value: true, message: "Please confirm your password" },
          matchField: {
            field: "password",
            message: "Passwords do not match",
          },
        },
      },
      {
        type: "checkbox",
        name: "acceptTerms",
        label: "I accept the Terms of Service and Privacy Policy",
        validation: {
          required: {
            value: true,
            message: "You must accept the terms to continue",
          },
        },
      },
    ],
  },
  {
    name: "Appointment Booking Form",
    slug: "appointment-booking",
    description: "A form to book an appointment",
    fields: [
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
        name: "phone",
        label: "Phone Number",
        validation: {
          required: { value: true, message: "Phone number is required" },
        },
      },
      {
        type: "select",
        name: "serviceType",
        label: "Service Type",
        options: [
          { label: "Consultation", value: "consultation" },
          { label: "Follow-up", value: "follow-up" },
          { label: "New Client Meeting", value: "new-client" },
          { label: "Project Review", value: "project-review" },
          { label: "Other", value: "other" },
        ],
        validation: {
          required: { value: true, message: "Please select a service type" },
        },
      },
      {
        type: "textarea",
        name: "serviceDetails",
        label: "Additional Details",
        placeholder:
          "Please provide any specific details about your appointment needs",
        rows: 3,
      },
      {
        type: "select",
        name: "practitioner",
        label: "Preferred Practitioner",
        options: [
          { label: "No Preference", value: "no-preference" },
          { label: "Dr. Johnson", value: "johnson" },
          { label: "Dr. Smith", value: "smith" },
          { label: "Dr. Williams", value: "williams" },
          { label: "Dr. Davis", value: "davis" },
        ],
      },
      {
        type: "date",
        name: "appointmentDate",
        label: "Appointment Date",
        validation: {
          required: { value: true, message: "Appointment date is required" },
          minDate: {
            value: tomorrowStr,
            message: "Appointment must be at least 1 day in advance",
          },
          maxDate: {
            value: threeMonthsLaterStr,
            message: "Appointment must be within the next 3 months",
          },
        },
      },
      {
        type: "select",
        name: "appointmentTime",
        label: "Preferred Time",
        options: [
          { label: "9:00 AM", value: "09:00" },
          { label: "10:00 AM", value: "10:00" },
          { label: "11:00 AM", value: "11:00" },
          { label: "1:00 PM", value: "13:00" },
          { label: "2:00 PM", value: "14:00" },
          { label: "3:00 PM", value: "15:00" },
          { label: "4:00 PM", value: "16:00" },
        ],
        validation: {
          required: { value: true, message: "Appointment time is required" },
        },
      },
      {
        type: "radio",
        name: "appointmentType",
        label: "Appointment Type",
        options: [
          { label: "In-Person", value: "in-person" },
          { label: "Virtual", value: "virtual" },
          { label: "Phone Call", value: "phone" },
        ],
        validation: {
          required: {
            value: true,
            message: "Please select an appointment type",
          },
        },
      },
      {
        type: "checkbox",
        name: "firstTime",
        label: "This is my first appointment",
      },
      {
        type: "checkbox",
        name: "insuranceInfo",
        label: "I will bring my insurance information",
      },
      {
        type: "checkbox",
        name: "reminders",
        label: "Send me appointment reminders",
      },
      {
        type: "select",
        name: "reminderPreference",
        label: "Reminder Preference",
        options: [
          { label: "Email", value: "email" },
          { label: "SMS", value: "sms" },
          { label: "Both", value: "both" },
        ],
      },
      {
        type: "checkbox",
        name: "cancellationPolicy",
        label: "I understand the 24-hour cancellation policy",
        validation: {
          required: {
            value: true,
            message: "You must agree to the cancellation policy",
          },
        },
      },
    ],
  },
  {
    name: "Checkout Form",
    slug: "checkout",
    description: "A form to checkout",
    fields: [
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
            value: `/^[\d\s]{16,19}$/`,
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
            value: `/^(0[1-9]|1[0-2])\/([0-9]{2})$/`,
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
            value: `/^[0-9]{3,4}$/`,
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
    ],
  },
];

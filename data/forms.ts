import { TypeFieldConfig } from "formwix";
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const tomorrowStr = tomorrow.toISOString().split("T")[0];
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
    description:
      "A simple login form that allows users to enter their credentials and access their accounts.",
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
    description: "A simple signup form for users to create an account.",
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
    description: "A form to book an appointment with a selected date and time.",
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
    description: "A form to collect user feedback and suggestions.",
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
            value: `/^[\\d\\s]{16,19}$/`,
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
  {
    name: "Contact Form",
    slug: "contact",
    description: "A simple form to collect user inquiries and messages.",
    fields: [
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
    ],
  },
  {
    name: "Feedback Form",
    slug: "feedback",
    description: "A form to collect user feedback and ratings.",
    fields: [
      {
        type: "text",
        name: "name",
        label: "Your Name",
        placeholder: "Enter your full name",
        validation: {
          required: { value: true, message: "Name is required" },
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
        type: "select",
        name: "productPurchased",
        label: "Product/Service Used",
        options: [
          { label: "Product A", value: "productA" },
          { label: "Product B", value: "productB" },
          { label: "Service X", value: "serviceX" },
          { label: "Service Y", value: "serviceY" },
          { label: "Other", value: "other" },
        ],
        validation: {
          required: { value: true, message: "Please select a product/service" },
        },
      },
      {
        type: "radio",
        name: "satisfaction",
        label: "Overall Satisfaction",
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
        type: "multiselect",
        name: "improvements",
        label: "Areas for Improvement",
        options: [
          { label: "Product Quality", value: "quality" },
          { label: "Customer Service", value: "service" },
          { label: "Price", value: "price" },
          { label: "User Experience", value: "ux" },
          { label: "Delivery Speed", value: "delivery" },
        ],
      },
      {
        type: "textarea",
        name: "comments",
        label: "Additional Comments",
        placeholder: "Please share any additional feedback",
        rows: 5,
        validation: {
          maxLength: {
            value: 1000,
            message: "Comments must be at most 1000 characters",
          },
        },
      },
      {
        type: "checkbox",
        name: "contactConsent",
        label: "I consent to being contacted about my feedback",
      },
      {
        type: "date",
        name: "purchaseDate",
        label: "Date of Purchase",
        validation: {
          maxDate: {
            value: new Date().toISOString().split("T")[0],
            message: "Purchase date cannot be in the future",
          },
        },
      },
    ],
  },
  {
    name: "Customer Survey Form",
    slug: "customer-survey",
    description: "A form to collect user feedback and ratings.",
    fields: [
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
    ],
  },
  {
    name: "Event Registration Form",
    slug: "event-registration",
    description: "A form to register participants for an event.",
    fields: [
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
            value: "/^[\\d+\\-() ]{10,15}$/",
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
    ],
  },
  {
    name: "Job Application Form",
    slug: "job-application",
    description:
      "A form for candidates to submit job applications with personal and professional details.",
    fields: [
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
            value: "/^[\\d\\+\\-\\(\\) ]{10,15}$/",
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
          required: {
            value: true,
            message: "Please select at least one skill",
          },
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
    ],
  },
  {
    name: "Loan Application Form",
    slug: "loan-application",
    description:
      "A form to apply for a loan by providing financial and personal details.",
    fields: [
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
            value: "/^[0-9+\\-\\s()]*$/",
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
            value: "/^\\d{3}-\\d{2}-\\d{4}$/",
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
            value: "/^\\d{5}(-\\d{4})?$/",
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
    ],
  },
  {
    name: "Newsletter Signup Form",
    slug: "newsletter-signup",
    description:
      "A form to subscribe users to a newsletter for updates and promotions.",
    fields: [
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
          { label: "Other", value: "other" },
        ],
      },
      {
        type: "multiselect",
        name: "interests",
        label: "Interests",
        options: [
          { label: "Technology", value: "tech" },
          { label: "Business", value: "business" },
          { label: "Health & Wellness", value: "health" },
          { label: "Food & Cooking", value: "food" },
          { label: "Travel", value: "travel" },
          { label: "Finance", value: "finance" },
          { label: "Entertainment", value: "entertainment" },
        ],
        validation: {
          required: {
            value: true,
            message: "Please select at least one interest",
          },
        },
      },
      {
        type: "radio",
        name: "frequency",
        label: "Newsletter Frequency",
        options: [
          { label: "Daily", value: "daily" },
          { label: "Weekly", value: "weekly" },
          { label: "Monthly", value: "monthly" },
        ],
        validation: {
          required: { value: true, message: "Please select a frequency" },
        },
      },
      {
        type: "select",
        name: "format",
        label: "Preferred Format",
        options: [
          { label: "HTML (Rich graphics and formatting)", value: "html" },
          { label: "Plain Text (Simple, lightweight emails)", value: "plain" },
        ],
        validation: {
          required: { value: true, message: "Please select a format" },
        },
      },
      {
        type: "checkbox",
        name: "promotionalEmails",
        label: "I also want to receive promotional emails",
      },
      {
        type: "checkbox",
        name: "termsAgreement",
        label: "I agree to the terms and privacy policy",
        validation: {
          required: {
            value: true,
            message: "You must agree to the terms and privacy policy",
          },
        },
      },
      {
        type: "textarea",
        name: "additionalInfo",
        label: "Additional Information",
        placeholder: "Is there anything else you'd like us to know?",
        rows: 3,
      },
    ],
  },
  {
    name: "Online Course Enrollment Form",
    slug: "onlinecourse-enrollment-form",
    description:
      "A form to enroll students in an online course by collecting necessary details.",
    fields: [
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
            value: "/^[0-9+\\-\\s()]*$/",
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
          required: {
            value: true,
            message: "Start date selection is required",
          },
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
    ],
  },
  {
    name: "Product Enquiry Form",
    slug: "product-enquiry",
    description: "A form to collect customer inquiries about a product.",
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
        type: "tel",
        name: "phone",
        label: "Phone Number",
        placeholder: "Enter your phone number",
        validation: {
          pattern: {
            value: "/^[0-9+\\-\\s()]*$/",
            message: "Please enter a valid phone number",
          },
        },
      },
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
          required: {
            value: true,
            message: "Please select a product category",
          },
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
    ],
  },
  {
    name: "Product Review Form",
    slug: "product-review",
    description:
      "A form for customers to submit reviews and ratings for a product.",
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
    ],
  },
  {
    name: "Subscription Form",
    slug: "subscription",
    description:
      "A form to subscribe users to a service, newsletter, or membership.",
    fields: [
      {
        type: "radio",
        name: "plan",
        label: "Select Your Plan",
        options: [
          {
            label:
              "Basic - $9.99/month\nIncludes basic features with limited access",
            value: "basic",
          },
          {
            label:
              "Premium - $19.99/month\nIncludes all features with priority support",
            value: "premium",
          },
          {
            label:
              "Pro - $29.99/month\nIncludes all features, priority support, and advanced analytics",
            value: "pro",
          },
        ],
        validation: {
          required: { value: true, message: "Please select a plan" },
        },
      },
      {
        type: "radio",
        name: "billingCycle",
        label: "Billing Cycle",
        options: [
          { label: "Monthly", value: "monthly" },
          { label: "Annual (Save 20%)", value: "annual" },
        ],
        validation: {
          required: { value: true, message: "Please select a billing cycle" },
        },
      },
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
        name: "cardNumber",
        label: "Card Number",
        placeholder: "XXXX XXXX XXXX XXXX",
        validation: {
          required: { value: true, message: "Card number is required" },
          pattern: {
            value: "/^[\\d\\s]{16,19}$/",
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
            value: "/^(0[1-9]|1[0-2])\/([0-9]{2})$/",
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
            value: "/^[0-9]{3,4}$/",
            message: "Please enter a valid CVC",
          },
        },
      },
      {
        type: "text",
        name: "zipCode",
        label: "Billing Zip/Postal Code",
        validation: {
          required: { value: true, message: "Zip code is required" },
        },
      },
      {
        type: "checkbox",
        name: "autoRenew",
        label: "Automatically renew my subscription",
      },
      {
        type: "checkbox",
        name: "termsAndConditions",
        label: "I agree to the terms of service and subscription policy",
        validation: {
          required: {
            value: true,
            message: "You must agree to the terms and conditions",
          },
        },
      },
      {
        type: "checkbox",
        name: "promotions",
        label: "I would like to receive promotional emails",
      },
    ],
  },
  {
    name: "User Profile Setting",
    slug: "user-profile-setting",
    description:
      "A form for users to update their profile details and preferences.",
    fields: [
      {
        type: "text",
        name: "displayName",
        label: "Display Name",
        validation: {
          required: { value: true, message: "Display name is required" },
          minLength: {
            value: 3,
            message: "Display name must be at least 3 characters",
          },
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
        name: "username",
        label: "Username",
        validation: {
          required: { value: true, message: "Username is required" },
          pattern: {
            value: "/^[a-zA-Z0-9_-]{3,16}$/",
            message:
              "Username must be 3-16 characters and can only contain letters, numbers, underscores, and hyphens",
          },
        },
      },
      {
        type: "textarea",
        name: "bio",
        label: "Bio",
        placeholder: "Tell others about yourself",
        rows: 4,
        validation: {
          maxLength: {
            value: 200,
            message: "Bio must be at most 200 characters",
          },
        },
      },
      {
        type: "url",
        name: "website",
        label: "Website",
        placeholder: "https://",
      },
      {
        type: "url",
        name: "twitter",
        label: "Twitter/X Profile",
        placeholder: "https://twitter.com/username",
      },
      {
        type: "url",
        name: "linkedin",
        label: "LinkedIn Profile",
        placeholder: "https://linkedin.com/in/username",
      },
      {
        type: "select",
        name: "timezone",
        label: "Timezone",
        options: [
          { label: "Pacific Time (PT)", value: "America/Los_Angeles" },
          { label: "Mountain Time (MT)", value: "America/Denver" },
          { label: "Central Time (CT)", value: "America/Chicago" },
          { label: "Eastern Time (ET)", value: "America/New_York" },
          { label: "UTC", value: "UTC" },
          { label: "Central European Time (CET)", value: "Europe/Paris" },
          { label: "Greenwich Mean Time (GMT)", value: "Europe/London" },
        ],
        validation: {
          required: { value: true, message: "Please select a timezone" },
        },
      },
      {
        type: "select",
        name: "language",
        label: "Preferred Language",
        options: [
          { label: "English", value: "en" },
          { label: "Spanish", value: "es" },
          { label: "French", value: "fr" },
          { label: "German", value: "de" },
          { label: "Japanese", value: "ja" },
          { label: "Chinese (Simplified)", value: "zh-CN" },
        ],
      },
      {
        type: "password",
        name: "currentPassword",
        label: "Current Password",
        placeholder: "Enter your current password",
      },
      {
        type: "password",
        name: "newPassword",
        label: "New Password",
        placeholder: "Enter your new password",
        validation: {
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
        },
      },
      {
        type: "password",
        name: "confirmPassword",
        label: "Confirm New Password",
        placeholder: "Confirm your new password",
        validation: {
          matchField: {
            field: "newPassword",
            message: "Passwords do not match",
          },
        },
      },
      {
        type: "radio",
        name: "theme",
        label: "Interface Theme",
        options: [
          { label: "Light", value: "light" },
          { label: "Dark", value: "dark" },
          { label: "System Default", value: "system" },
        ],
      },
      {
        type: "checkbox",
        name: "emailNotifications",
        label: "Email Notifications",
      },
      {
        type: "multiselect",
        name: "notificationPreferences",
        label: "Notification Preferences",
        options: [
          { label: "Direct messages", value: "direct-messages" },
          { label: "Comment replies", value: "comment-replies" },
          { label: "Mentions", value: "mentions" },
          { label: "Account updates", value: "account-updates" },
          { label: "New features", value: "new-features" },
        ],
      },
      {
        type: "checkbox",
        name: "twoFactorAuth",
        label: "Enable Two-Factor Authentication",
      },
      {
        type: "checkbox",
        name: "publicProfile",
        label: "Make my profile public",
      },
    ],
  },
  {
    name: "Support Ticket Form",
    slug: "support-ticket",
    description:
      "A form for users to submit support tickets and report issues.",
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
        type: "text",
        name: "orderNumber",
        label: "Order/Account Number",
        placeholder: "Enter your order or account number if applicable",
      },
      {
        type: "select",
        name: "issueCategory",
        label: "Issue Category",
        options: [
          { label: "Technical Issue", value: "technical" },
          { label: "Billing Problem", value: "billing" },
          { label: "Account Access", value: "account" },
          { label: "Product Question", value: "product" },
          { label: "Return/Refund", value: "return" },
          { label: "Other", value: "other" },
        ],
        validation: {
          required: { value: true, message: "Please select an issue category" },
        },
      },
      {
        type: "select",
        name: "priority",
        label: "Priority Level",
        options: [
          { label: "Low", value: "low" },
          { label: "Medium", value: "medium" },
          { label: "High", value: "high" },
          { label: "Critical", value: "critical" },
        ],
        validation: {
          required: { value: true, message: "Please select a priority level" },
        },
      },
      {
        type: "text",
        name: "subject",
        label: "Subject",
        placeholder: "Brief description of the issue",
        validation: {
          required: { value: true, message: "Subject is required" },
          maxLength: {
            value: 100,
            message: "Subject must be at most 100 characters",
          },
        },
      },
      {
        type: "textarea",
        name: "description",
        label: "Detailed Description",
        placeholder: "Please describe your issue in detail",
        rows: 6,
        validation: {
          required: { value: true, message: "Description is required" },
          minLength: {
            value: 30,
            message: "Please provide more details (at least 30 characters)",
          },
        },
      },
      {
        type: "multiselect",
        name: "attemptedSolutions",
        label: "Steps Already Taken",
        options: [
          { label: "Restarted device/application", value: "restart" },
          { label: "Cleared cache/cookies", value: "clear" },
          { label: "Updated software", value: "update" },
          { label: "Checked help documentation", value: "docs" },
          { label: "Contacted support previously", value: "previous" },
        ],
      },
      {
        type: "checkbox",
        name: "acknowledgment",
        label:
          "I understand that support tickets are handled in order of priority and submission time",
        validation: {
          required: {
            value: true,
            message: "Please acknowledge this information",
          },
        },
      },
      {
        type: "checkbox",
        name: "fileAttached",
        label:
          "I will attach relevant files (screenshots, logs) after submission",
      },
    ],
  },
];

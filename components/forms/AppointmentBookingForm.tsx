"use client";
import { Formwix, TypeFieldConfig, TypeFormData } from "formwix";
import "formwix/dist/formwix.css";
export default function AppointmentBookingForm() {
  // Get tomorrow's date in YYYY-MM-DD format for min date validation
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split("T")[0];

  // Get date 3 months from now for max date validation
  const threeMonthsLater = new Date();
  threeMonthsLater.setMonth(threeMonthsLater.getMonth() + 3);
  const threeMonthsLaterStr = threeMonthsLater.toISOString().split("T")[0];

  const fields: TypeFieldConfig[] = [
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
        pattern: {
          value: /^[\d\+\-\(\) ]{10,15}$/,
          message: "Please enter a valid phone number",
        },
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
        required: { value: true, message: "Please select an appointment type" },
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
  ];

  const formConfig = {
    onSubmit: (data: TypeFormData) => {
      console.log("Appointment booking data:", data);
      // Handle appointment booking here
    },
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      serviceType: "",
      serviceDetails: "",
      practitioner: "no-preference",
      appointmentDate: "",
      appointmentTime: "",
      appointmentType: "",
      firstTime: false,
      insuranceInfo: false,
      reminders: true,
      reminderPreference: "email",
      cancellationPolicy: false,
    },
    fields,
    submitText: "Book Appointment",
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Book an Appointment
      </h2>
      <p className="mb-6 text-center text-gray-600">
        Schedule your appointment with our team
      </p>
      <Formwix config={formConfig} />
    </div>
  );
}

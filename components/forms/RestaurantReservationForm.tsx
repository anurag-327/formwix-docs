"use client";
import { Formwix, TypeFieldConfig, TypeFormData } from "formwix";
import "formwix/dist/formwix.css";
export default function RestaurantReservationForm() {
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
      name: "reservationDate",
      label: "Reservation Date",
      validation: {
        required: { value: true, message: "Reservation date is required" },
        minDate: {
          value: new Date().toISOString().split("T")[0],
          message: "Date must be in the future",
        },
      },
    },
    {
      type: "time",
      name: "reservationTime",
      label: "Reservation Time",
      validation: {
        required: { value: true, message: "Reservation time is required" },
      },
    },
    {
      type: "number",
      name: "partySize",
      label: "Number of Guests",
      placeholder: "Enter number of guests",
      validation: {
        required: { value: true, message: "Number of guests is required" },
        min: { value: 1, message: "Must have at least 1 guest" },
        max: {
          value: 20,
          message: "For parties larger than 20, please call directly",
        },
      },
    },
    {
      type: "select",
      name: "occasion",
      label: "Special Occasion",
      options: [
        { label: "None", value: "none" },
        { label: "Birthday", value: "birthday" },
        { label: "Anniversary", value: "anniversary" },
        { label: "Business Meal", value: "business" },
        { label: "Date Night", value: "date" },
        { label: "Other", value: "other" },
      ],
    },
    {
      type: "radio",
      name: "seatingPreference",
      label: "Seating Preference",
      options: [
        { label: "Indoor", value: "indoor" },
        { label: "Outdoor", value: "outdoor" },
        { label: "No Preference", value: "noPreference" },
      ],
      validation: {
        required: { value: true, message: "Seating preference is required" },
      },
    },
    {
      type: "checkbox",
      name: "highChair",
      label: "High chair needed",
    },
    {
      type: "checkbox",
      name: "wheelchairAccess",
      label: "Wheelchair accessible seating required",
    },
    {
      type: "textarea",
      name: "dietaryRestrictions",
      label: "Dietary Restrictions or Allergies",
      placeholder: "Please note any allergies or dietary requirements",
      rows: 3,
    },
    {
      type: "textarea",
      name: "specialRequests",
      label: "Special Requests",
      placeholder: "Any special requests for your reservation",
      rows: 3,
      validation: {
        maxLength: {
          value: 500,
          message: "Special requests must be at most 500 characters",
        },
      },
    },
    {
      type: "radio",
      name: "confirmationPreference",
      label: "Confirmation Preference",
      options: [
        { label: "Email", value: "email" },
        { label: "Text Message", value: "text" },
        { label: "Both", value: "both" },
      ],
      validation: {
        required: {
          value: true,
          message: "Confirmation preference is required",
        },
      },
    },
    {
      type: "checkbox",
      name: "cancelPolicy",
      label: "I understand the cancellation policy (24-hour notice required)",
      validation: {
        required: {
          value: true,
          message: "You must acknowledge the cancellation policy",
        },
      },
    },
  ];

  const formConfig = {
    onSubmit: (data: TypeFormData) => {
      console.log("Reservation submitted:", data);
    },
    defaultValues: {
      occasion: "none",
      seatingPreference: "noPreference",
      confirmationPreference: "email",
      highChair: false,
      wheelchairAccess: false,
      cancelPolicy: false,
      partySize: 2,
    },
    fields,
  };

  return (
    <main className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Restaurant Reservation
      </h1>
      <Formwix config={formConfig} />
    </main>
  );
}

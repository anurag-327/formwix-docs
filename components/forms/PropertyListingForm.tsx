"use client";
import { Formwiz, TypeFieldConfig, TypeFormData } from "formwiz";
import "formwiz/dist/formwiz.css";
export default function PropertyListingForm() {
  const fields: TypeFieldConfig[] = [
    {
      type: "text",
      name: "listingTitle",
      label: "Listing Title",
      placeholder: "Enter a catchy title for your property",
      validation: {
        required: { value: true, message: "Listing title is required" },
        maxLength: {
          value: 100,
          message: "Title must be at most 100 characters",
        },
      },
    },
    {
      type: "select",
      name: "propertyType",
      label: "Property Type",
      options: [
        { label: "House", value: "house" },
        { label: "Apartment", value: "apartment" },
        { label: "Condo", value: "condo" },
        { label: "Townhouse", value: "townhouse" },
        { label: "Land", value: "land" },
        { label: "Commercial", value: "commercial" },
        { label: "Other", value: "other" },
      ],
      validation: {
        required: { value: true, message: "Property type is required" },
      },
    },
    {
      type: "radio",
      name: "listingType",
      label: "Listing Type",
      options: [
        { label: "For Sale", value: "sale" },
        { label: "For Rent", value: "rent" },
      ],
      validation: {
        required: { value: true, message: "Listing type is required" },
      },
    },
    {
      type: "number",
      name: "price",
      label: "Price",
      placeholder: "Enter the price",
      validation: {
        required: { value: true, message: "Price is required" },
        min: { value: 1, message: "Price must be greater than 0" },
      },
    },
    {
      type: "number",
      name: "bedrooms",
      label: "Bedrooms",
      placeholder: "Number of bedrooms",
      validation: {
        required: { value: true, message: "Number of bedrooms is required" },
        min: { value: 0, message: "Cannot be negative" },
      },
    },
    {
      type: "number",
      name: "bathrooms",
      label: "Bathrooms",
      placeholder: "Number of bathrooms",
      validation: {
        required: { value: true, message: "Number of bathrooms is required" },
        min: { value: 0, message: "Cannot be negative" },
      },
    },
    {
      type: "number",
      name: "squareFeet",
      label: "Square Feet",
      placeholder: "Property size in square feet",
      validation: {
        required: { value: true, message: "Square footage is required" },
        min: { value: 1, message: "Must be greater than 0" },
      },
    },
    {
      type: "text",
      name: "address",
      label: "Street Address",
      placeholder: "Enter the street address",
      validation: {
        required: { value: true, message: "Street address is required" },
      },
    },
    {
      type: "text",
      name: "city",
      label: "City",
      placeholder: "Enter the city",
      validation: {
        required: { value: true, message: "City is required" },
      },
    },
    {
      type: "text",
      name: "state",
      label: "State/Province",
      placeholder: "Enter the state or province",
      validation: {
        required: { value: true, message: "State/Province is required" },
      },
    },
    {
      type: "text",
      name: "zipCode",
      label: "Zip/Postal Code",
      placeholder: "Enter the zip/postal code",
      validation: {
        required: { value: true, message: "Zip/Postal code is required" },
      },
    },
    {
      type: "multiselect",
      name: "amenities",
      label: "Amenities",
      options: [
        { label: "Garage", value: "garage" },
        { label: "Pool", value: "pool" },
        { label: "Air Conditioning", value: "ac" },
        { label: "Furnished", value: "furnished" },
        { label: "Fireplace", value: "fireplace" },
        { label: "Laundry", value: "laundry" },
        { label: "Balcony", value: "balcony" },
        { label: "Garden", value: "garden" },
      ],
    },
    {
      type: "textarea",
      name: "description",
      label: "Property Description",
      placeholder: "Describe your property in detail",
      rows: 8,
      validation: {
        required: { value: true, message: "Description is required" },
        minLength: {
          value: 100,
          message: "Description must be at least 100 characters",
        },
      },
    },
    {
      type: "date",
      name: "availableFrom",
      label: "Available From",
      validation: {
        required: { value: true, message: "Availability date is required" },
      },
    },
    {
      type: "checkbox",
      name: "termsAgreement",
      label: "I agree to the terms and conditions of listing my property",
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
      console.log("Property listing submitted:", data);
    },
    defaultValues: {
      listingType: "sale",
      bedrooms: 2,
      bathrooms: 2,
      termsAgreement: false,
    },
    fields,
  };

  return (
    <main className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Property Listing Submission
      </h1>
      <Formwiz config={formConfig} />
    </main>
  );
}

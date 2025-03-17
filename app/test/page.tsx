"use client";
import { useState } from "react";
import { fieldConfigs } from "./configs"; // Import the configs array
import FormwizPasswordFieldDemo from "@/components/ui/Ci";

const Page = () => {
  // State to track which field type is currently selected
  const [selectedFieldIndex, setSelectedFieldIndex] = useState(0);
  const selectedField = fieldConfigs[selectedFieldIndex];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Formwiz Field Documentation</h1>

      {/* Field selector */}
      <div className="mb-8">
        <label
          htmlFor="fieldSelector"
          className="block text-sm font-medium mb-2"
        >
          Select Field Type:
        </label>
        <select
          id="fieldSelector"
          className="w-full max-w-xs p-2 border rounded"
          value={selectedFieldIndex}
          onChange={(e) => setSelectedFieldIndex(parseInt(e.target.value))}
        >
          {fieldConfigs.map((field, index) => (
            <option key={field.name} value={index}>
              {field.type.charAt(0).toUpperCase() + field.type.slice(1)} Field
            </option>
          ))}
        </select>
      </div>

      {/* Documentation for the selected field */}
      {/* <FormFieldDocs
      data={selectedField.config}
       
      /> */}

      <FormwizPasswordFieldDemo />
    </div>
  );
};

export default Page;

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { CodeBlock } from "@/components/ui/Codeblock";
import { ChevronRight } from "lucide-react";

export default function Page() {
  const breadcrumbItems = [
    { name: "Docs", href: "/docs" },
    { name: "Field Types" },
  ];

  return (
    <div className="max-w-3xl mb-8 leading-[1.65rem]">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="text-4xl font-bold tracking-tight mb-2">Field Types</h1>
      <p className="text-muted-foreground mb-8">
        Formwix supports various field types to address different input needs.
      </p>

      <h2 className="text-xl font-semibold mb-4">Supported Field Types</h2>

      <table className="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            { type: "text", description: "Single-line text input" },
            { type: "email", description: "Email input with validation" },
            {
              type: "password",
              description: "Password input with show/hide functionality",
            },
            { type: "tel", description: "Telephone number input" },
            { type: "number", description: "Numeric input" },
            { type: "date", description: "Date picker" },
            { type: "time", description: "Time picker" },
            { type: "url", description: "URL input with validation" },
            { type: "textarea", description: "Multi-line text input" },
            { type: "select", description: "Dropdown selection" },
            { type: "radio", description: "Radio button group" },
            { type: "checkbox", description: "Checkbox input" },
            { type: "multiSelect", description: "Multiple selection dropdown" },
            { type: "datetime-local", description: "Date and time picker" },
          ].map((field, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                {field.type}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {field.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <CodeBlock
        code={`export type TypeFieldConfig = {
  type: "text" | "email" | "password" | "tel" | "number" | "date" | "time" | "url" | "textarea" | "select" | "radio" | "checkbox" | "multiSelect" | "datetime-local";
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  validation?: TypeValidationRules;
  description?: string;
  theme?: Partial<typeof defaultTheme>;
  disabled?: boolean;
  options?: { label: string; value: string | number }[]; // for select, radio, and multiSelect
};`}
      />

      <div className="flex justify-end mt-6">
        <a
          href="/docs/validations"
          className="rounded-md text-sm px-4 py-2 font-semibold flex items-center hover:bg-gray-100"
        >
          <span>Validation Rules</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
}

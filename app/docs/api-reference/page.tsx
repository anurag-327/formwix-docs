import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { CodeBlock } from "@/components/ui/Codeblock";
import { ChevronRight } from "lucide-react";
export default function Page() {
  const breadcrumbItems = [
    { name: "Docs", href: "/docs" },
    { name: "API Refrence" },
  ];

  return (
    <div className="max-w-3xl mb-8 leading-[1.65rem]">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="text-4xl font-bold tracking-tight mb-2">API References</h1>
      <p className="text-muted-foreground mb-8">
        Learn how to configure Formwix, including theming, field settings, and
        form submission handling.
      </p>

      {/* Form Configuration */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Form Configuration</h2>
        <p className="mb-4">
          The Formwix configuration defines fields, buttons, and submission
          behavior.
        </p>
        <CodeBlock
          code={`export interface TypeFormConfig {
  fields: TypeFieldConfig[];
  submitButtonLabel?: string;
  onSubmit: (data: TypeFormData, formUtils: TypeFormUtils) => void;
  defaultValues?: TypeFormData;
  showFormReset?: boolean;
  resetButtonLabel?: string;
};`}
        />
      </div>
      {/* Submit Button Configuration */}
      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">
          Submit Button Configuration
        </h2>
        <p className="mb-4">
          The submit button function receives form data and utility functions
          for enhanced customization.
        </p>
        <CodeBlock
          code={`export type TypeSubmitButtonArgsConfig = {
  data: TypeFormData;
  formutils: TypeFormUtils;
};`}
        />

        <div>
          {/* Form Utilities */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Form Utilities</h2>
            <p className="mb-4">
              Form utilities provide helper functions to manipulate the form
              state.
            </p>
            <CodeBlock
              code={`export type TypeFormUtils = {
  reset: () => void; // Resets the form
};`}
            />
          </div>
        </div>
      </div>

      {/* Field Type Configuration */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Field Type Configuration</h2>
        <p className="mb-4">
          Form fields in Formwix can have different types such as text, email,
          password, and more.
        </p>
        <CodeBlock
          code={`export type TypeFieldConfig = {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  validation?: TypeValidationRules;
  description?: string;
  theme?: Partial<typeof defaultTheme>;
  disabled?: boolean;
  options?: { label: string; value: string|number }[]; // for select, radio and multiselect 
};`}
        />
      </div>

      {/* Validation Configuration */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Validation Configuration</h2>
        <p className="mb-4">
          Each field can have validation rules like required fields, min/max
          lengths, or regex patterns.
        </p>
        <p className="text-muted-foreground mb-4 italic">
          Visit individual field documentation to see the applicable validations
          for each type.
        </p>
        <CodeBlock
          code={`export interface TypeValidationRules {
  min?: TypeGenericValidationRule;
  max?: TypeGenericValidationRule;
  minLength?: TypeGenericValidationRule;
  maxLength?: TypeGenericValidationRule;
  pattern?: TypeGenericValidationRule;
  minDate?: TypeGenericValidationRule;
  maxDate?: TypeGenericValidationRule;
  required?: TypeGenericValidationRule;
  matchField?: TypeMatchFieldValidationRule;
}

export interface TypeGenericValidationRule {
  value: number | string  | boolean;
  message?: string;
};

export interface TypeMatchFieldValidationRule {
  field: string;
  message?: string;
};
`}
        />
      </div>
      <p className="text-sm mb-4 text-muted-foreground">
        For detailed type definitions, visit the{" "}
        <a
          href="https://github.com/anurag-327/formwix/blob/main/src/components/types.ts"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Type Definitions
        </a>{" "}
        in the repository.
      </p>

      <div className="flex justify-end">
        <a
          href="/docs/theming"
          className="rounded-md text-sm px-4 py-2 font-semibold flex items-center hover:bg-gray-100"
        >
          <span>Theming</span>
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

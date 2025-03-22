import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { CodeBlock } from "@/components/ui/Codeblock";
import { ChevronRight } from "lucide-react";

export default function Page() {
  const breadcrumbItems = [
    { name: "Docs", href: "/docs" },
    { name: "Validations" },
  ];

  return (
    <div className="max-w-3xl mb-8 leading-[1.65rem]">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="text-4xl font-bold tracking-tight mb-2">
        Validation Rules
      </h1>
      <p className="text-muted-foreground mb-8">
        Learn about the different validation rules supported in Formwix.
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Validation Types</h2>
        <p className="mb-4">
          Each field can have validation rules to ensure proper input.
        </p>
        <CodeBlock
          code={`export interface TypeValidationRules {
  required?: TypeGenericValidationRule;
  minLength?: TypeGenericValidationRule;
  maxLength?: TypeGenericValidationRule;
  min?: TypeGenericValidationRule;
  max?: TypeGenericValidationRule;
  minDate?: TypeGenericValidationRule;
  maxDate?: TypeGenericValidationRule;
  pattern?: TypeGenericValidationRule;
  matchField?: TypeMatchFieldValidationRule;
};

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

      <h2 className="text-xl font-semibold mt-8 mb-4">Password Validations</h2>
      <p className="mb-4">Password fields have additional validation rules:</p>
      <CodeBlock
        code={`export interface TypePasswordFieldConfig extends TypeBaseFieldConfig {
  type: "password";
  validation?: TypeValidationRules & {
    containNumber?: TypeGenericValidationRule;
    containSpecialChar?: TypeGenericValidationRule;
    containUpperCase?: TypeGenericValidationRule;
    containLowerCase?: TypeGenericValidationRule;
    preventCommonPassword?: TypeGenericValidationRule;
    matchField?: TypeMatchFieldValidationRule;
  };
};`}
      />

      <div className="mt-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Validation Descriptions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>required:</strong> Ensures the field is not left empty.
          </li>
          <li>
            <strong>minLength / maxLength:</strong> Limits the number of
            characters allowed.
          </li>
          <li>
            <strong>min / max:</strong> Defines numerical limits for a field.
          </li>
          <li>
            <strong>minDate / maxDate:</strong> Ensures a date falls within a
            specified range.
          </li>
          <li>
            <strong>pattern:</strong> Enforces a regex pattern for validation.
          </li>
          <li>
            <strong>matchField:</strong> Ensures a field matches another (e.g.,
            password confirmation).
          </li>
        </ul>
      </div>

      {/* Special Note on Regex Validation */}
      <div className="mt-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">
          Special Note: Passing Regex for Validation
        </h2>
        <p className="mb-4">
          When passing a regex pattern for validation, ensure that it is a
          <strong> string</strong> and properly escaped. Here’s how you should
          pass a regex in Formwix:
        </p>
        <CodeBlock
          code={`const fieldValidation = {
  pattern: {
    value: "/^[0-9+\\-\\s()]*$/",
    message: "Invalid format"
  }
};`}
        />
        <p className="mt-2">
          - Always double-escape <strong>(`\\`)</strong> backslashes when
          defining regex inside a string. - Avoid using raw RegExp objects, as
          validation expects a string.
        </p>
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
          href="/docs/api-reference"
          className="rounded-md text-sm px-4 py-2 font-semibold flex items-center hover:bg-gray-100"
        >
          <span>API Reference</span>
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

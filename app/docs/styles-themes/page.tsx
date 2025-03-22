import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { CodeBlock } from "@/components/ui/Codeblock";
import { ChevronRight } from "lucide-react";

export default function Page() {
  const breadcrumbItems = [
    { name: "Docs", href: "/docs" },
    { name: "Theming" },
  ];

  return (
    <div className="max-w-3xl mb-8 leading-[1.65rem]">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="text-4xl font-bold tracking-tight mb-2">Theming</h1>
      <p className="text-muted-foreground mb-8">
        Formwix provides a flexible theming system that allows you to customize
        the appearance of your forms at both global and field levels.
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Default Theme</h2>
        <p className="mb-4">
          Formwix comes with a default theme that you can override either
          globally or at the field level. Below is the default theme object and
          what each field represents.
        </p>
        <ul className="mb-4 list-disc pl-5">
          <li>
            <code>form</code>: The main form container.
          </li>
          <li>
            <code>formContainer</code>: The wrapper for the entire form.
          </li>
          <li>
            <code>fieldContainer</code>: The container for a single field.
          </li>
          <li>
            <code>fieldWrapper</code>: The wrapper around the field input.
          </li>
          <li>
            <code>fieldLabelWrapper</code>: The wrapper around the field label.
          </li>
          <li>
            <code>label</code>: The styling for field labels.
          </li>
          <li>
            <code>optionsLabel</code>: Labels for options in dropdowns, radio
            buttons, etc.
          </li>
          <li>
            <code>requiredLabel</code>: The required field indicator.
          </li>
          <li>
            <code>fieldDescription</code>: Styling for field descriptions.
          </li>
          <li>
            <code>fieldError</code>: Styling for error messages.
          </li>
          <li>
            <code>text</code>, <code>email</code>, <code>tel</code>,{" "}
            <code>textarea</code>, <code>number</code>, <code>date</code>,{" "}
            <code>time</code>, and <code>url</code>: Specific styles for
            different input types.
          </li>
          <li>
            <code>passwordWrapper</code>: Wrapper for password input fields.
          </li>
          <li>
            <code>password</code>: Styling for the password input field.
          </li>
          <li>
            <code>passwordEyeButtonWrapper</code>: Wrapper for the password
            visibility toggle button.
          </li>
          <li>
            <code>passwordEyeButton</code>: Styling for the show password
            button.
          </li>
          <li>
            <code>passwordEyeCloseButton</code>: Styling for the hide password
            button.
          </li>
          <li>
            <code>checkBoxWrapper</code>: Wrapper for the checkbox field.
          </li>
          <li>
            <code>checkbox</code>: Styling for checkboxes.
          </li>
          <li>
            <code>checkBoxLabel</code>: Styling for checkbox labels.
          </li>
          <li>
            <code>selectOptionsWrapper</code>: Wrapper for select dropdown
            options.
          </li>
          <li>
            <code>select</code>: Styling for select dropdowns.
          </li>
          <li>
            <code>radioWrapper</code>: Wrapper for radio button groups.
          </li>
          <li>
            <code>radioOptionsWrapper</code>: Wrapper for multiple radio button
            options.
          </li>
          <li>
            <code>multiSelectWrapper</code>: Wrapper for multi-select dropdowns.
          </li>
          <li>
            <code>multiSelect</code>: Styling for multi-select inputs.
          </li>
          <li>
            <code>multiSelectOptionsWrapper</code>: Wrapper for multi-select
            options.
          </li>
          <li>
            <code>radio</code>: Styling for individual radio buttons.
          </li>
          <li>
            <code>formActionWrapper</code>: Wrapper for form action buttons.
          </li>
          <li>
            <code>submitButton</code>: Styling for the submit button.
          </li>
          <li>
            <code>formResetButton</code>: Styling for the reset button.
          </li>
        </ul>
        <CodeBlock
          code={`const defaultTheme = {
  form: "df-form",
  formContainer: "df-form-container",
  fieldContainer: "df-field-container",
  fieldWrapper: "df-field-wrapper",
  fieldLabelWrapper: "df-field-label-wrapper",
  label: "df-label",
  optionsLabel: "df-options-label",
  requiredLabel: "df-required-label",
  fieldDescription: "df-field-description",
  fieldError: "df-field-error",
  text: "df-text",
  email: "df-email",
  tel: "df-tel",
  textarea: "df-textarea",
  number: "df-number",
  date: "df-date",
  passwordWrapper: "df-password-wrapper",
  password: "df-password",
  passwordEyeButtonWrapper: "df-password-eye-button-wrapper",
  passwordEyeButton: "df-password-eye-button",
  passwordEyeCloseButton: "df-password-eye-close-button",
  checkBoxWrapper: "df-checkbox-wrapper",
  checkbox: "df-checkbox",
  checkBoxLabel: "df-checkbox-label",
  selectOptionsWrapper: "df-select-options-wrapper",
  select: "df-select",
  radioWrapper: "df-radio-wrapper",
  radioOptionsWrapper: "df-radio-options-wrapper",
  multiSelectWrapper: "df-multi-select-wrapper",
  multiSelect: "df-multi-select",
  multiSelectOptionsWrapper: "df-multi-select-options-wrapper",
  radio: "df-radio",
  formActionWrapper: "df-form-action-wrapper",
  submitButton: "df-submit-button",
  formResetButton: "df-form-reset-button",
  time: "df-time",
  url: "df-url",
};`}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Custom Theming</h2>
        <p className="mb-4">
          To apply custom styles, pass a <code>theme</code> object to the
          <code>Formwix</code> component. You can customize individual fields by
          specifying classes in the <code>theme</code> object.
        </p>
        <CodeBlock
          code={`<Formwix
  config={config}
  theme={{
    email: "border border-gray-300 w-full py-2 px-2 rounded-lg outline-none",
    passwordWrapper:
      "border flex justify-end items-center relative border-gray-300 w-full py-2 px-2 rounded-lg",
    submitButton: "bg-black text-white w-full py-2 rounded-lg",
  }}
/>`}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Global Theming</h2>
        <p className="mb-4">
          Apply styles globally by passing a <code>theme</code> object to the
          <code>Formwix</code> component. This will apply the styles to all
          forms using Formwix.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Field-Level Theming</h2>
        <p className="mb-4">
          Override styles for specific fields by including a <code>theme</code>
          property in the field configuration. This is useful when you need
          certain fields to have unique styles.
        </p>
        <CodeBlock
          code={`const fields: TypeFieldConfig[] = [
  {
    type: "email",
    label: "Email",
    name: "email",
    theme: {
      email: "border-2 border-blue-500 rounded-md p-2",
    },
  },
];`}
        />
      </div>

      <div className="flex justify-end ">
        <a
          href="/docs/fields"
          className="rounded-md text-sm px-4 py-2 font-semibold flex items-center hover:bg-gray-100"
        >
          <span>Fields</span>
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

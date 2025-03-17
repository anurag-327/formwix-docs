// fieldConfigs.ts
import {
  TypeFieldConfig,
  TypeTextFieldConfig,
  TypeEmailFieldConfig,
  TypePasswordFieldConfig,
  TypeNumberFieldConfig,
  TypeTextAreaFieldConfig,
  TypeSelectFieldConfig,
  TypeMultiSelectFieldConfig,
  TypeRadioFieldConfig,
  TypeCheckboxFieldConfig,
  TypeDateFieldConfig,
  TypeTimeFieldConfig,
  TypeURLFieldConfig,
  TypeTelFieldConfig,
  TypeDateTimeLocalFieldConfig,
} from "formwiz"; // Import types from your types file

export interface FieldDocConfig {
  type: string;
  name: string;
  config: TypeFieldConfig;
  componentOutline: string;
  generatedCode: string;
  customCodeUsage: string;
  fieldTypeDefinition: string;
  validationRules?: string;
}

// Array of all supported field configurations
export const fieldConfigs: FieldDocConfig[] = [
  {
    type: "text",
    name: "text",
    config: {
      type: "text" as const,
      name: "textField",
      label: "Text Field",
      placeholder: "Enter text",
      validation: {
        required: {
          value: true,
          message: "This field is required",
        },
        minLength: {
          value: 3,
          message: "Minimum 3 characters required",
        },
        maxLength: {
          value: 50,
          message: "Maximum 50 characters allowed",
        },
      },
    } as TypeTextFieldConfig,
    validationRules: `export interface TypeValidationRules {
        minLength?: TypeGenericValidationRule;
        maxLength?: TypeGenericValidationRule;
        pattern?: TypeGenericValidationRule;
        required?: TypeGenericValidationRule;
      }`,
    fieldTypeDefinition: `interface TypeValidationRules {
  pattern?: TypeGenericValidationRule;
  required?: TypeGenericValidationRule;
}

export interface TypeTextFieldConfig extends TypeBaseFieldConfig {
    type: "text";
  }`,
    componentOutline: `
  <FormwizTextField
    label="Text Field"
    placeholder="Enter text"
    validation={{
      required: { value: true, message: "This field is required" },
      minLength: { value: 3, message: "Minimum 3 characters required" },
      maxLength: { value: 50, message: "Maximum 50 characters allowed" }
    }}
  />`,
    generatedCode: `import { Formwiz, TypeFormData, TypeFieldConfig, TypeFormConfig } from "formwiz";
  
  export default function FormwizDemo() {
    // Define form fields configuration
    const formFields: TypeFieldConfig[] = [
      {
        type: "text",
        name: "textField",
        label: "Text Field",
        placeholder: "Enter text",
        validation: {
          required: {
            value: true,
            message: "This field is required"
          },
          minLength: {
            value: 3,
            message: "Minimum 3 characters required"
          },
          maxLength: {
            value: 50,
            message: "Maximum 50 characters allowed"
          }
        },
      }
    ];
  
    // Construct the form configuration
    const config: TypeFormConfig = {
      fields: formFields,
      onSubmit: (data: TypeFormData, formUtils) => {
        console.log(data);
        formUtils.reset();
      },
    };
  
    return (
      <div>
        <Formwiz config={config} />
      </div>
    );
  }`,
    customCodeUsage: `import { useForm } from "react-hook-form";
import { FormwizTextField } from "formwiz";
  
export default function FormwizTextFieldDemo() {
    const theme = {
      text: "border border-gray-300 rounded-md p-2",
    };
  
    const {
      control,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    function onSubmit(data) {
      console.log(data);
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>

      {/* The FormwizTextField component only renders the input field.
          It does not include a label or error message by default.
          You need to manually add them for better accessibility and user feedback. 
    */}

        <label htmlFor="textField">Text Field</label>
        {errors.textField && <span className="text-red-500">{errors.textField.message}</span>}
  
        <FormwizTextField
          field={{
            type: "text",
            name: "textField",
            label: "Text Field",
            placeholder: "Enter text",
            validation: {
              required: {
                value: true,
                message: "This field is required"
              },
              minLength: {
                value: 3,
                message: "Minimum 3 characters required"
              },
              maxLength: {
                value: 50,
                message: "Maximum 50 characters allowed"
              }
            },
          }}
          control={control}
          errors={errors}
          theme={theme}
        />
      </form>
    );
  }`,
  },
  {
    type: "email",
    name: "email",
    config: {
      type: "email" as const,
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      validation: {
        required: {
          value: true,
          message: "Email is required",
        },
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address",
        },
      },
    } as TypeEmailFieldConfig,
    validationRules: `export interface TypeValidationRules {
        pattern?: TypeGenericValidationRule;
        required?: TypeGenericValidationRule;
      }`,
    fieldTypeDefinition: `export interface TypeEmailFieldConfig extends TypeBaseFieldConfig {
    type: "email";
  }`,
    componentOutline: `
  <FormwizEmailField
    label="Email"
    placeholder="Enter your email"
    validation={{
      required: { value: true, message: "Email is required" },
      pattern: { 
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i, 
        message: "Invalid email address" 
      }
    }}
  />`,
    generatedCode: `import { Formwiz, TypeFormData, TypeFieldConfig, TypeFormConfig } from "formwiz";
  
  export default function FormwizDemo() {
    // Define form fields configuration
    const formFields: TypeFieldConfig[] = [
      {
        type: "email",
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        validation: {
          required: {
            value: true,
            message: "Email is required"
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          }
        },
      }
    ];
  
    // Construct the form configuration
    const config: TypeFormConfig = {
      fields: formFields,
      onSubmit: (data: TypeFormData, formUtils) => {
        console.log(data);
        formUtils.reset();
      },
    };
  
    return (
      <div>
        <Formwiz config={config} />
      </div>
    );
  }`,
    customCodeUsage: `import { useForm } from "react-hook-form";
  import { FormwizEmailField } from "formwiz";
  
  export default function FormwizEmailFieldDemo() {
    const theme = {
      email: "border border-gray-300 rounded-md p-2",
    };
  
     {/* The FormwizEmailField component only renders the input field.
          It does not include a label or error message by default.
          You need to manually add them for better accessibility and user feedback. 
    */}

    const {
      control,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    function onSubmit(data) {
      console.log(data);
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
  
        <FormwizEmailField
          field={{
            type: "email",
            name: "email",
            label: "Email",
            placeholder: "Enter your email",
            validation: {
              required: {
                value: true,
                message: "Email is required"
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            },
          }}
          control={control}
          errors={errors}
          theme={theme}
        />
      </form>
    );
  }`,
  },
  {
    type: "password",
    name: "password",
    config: {
      type: "password" as const,
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      validation: {
        required: {
          value: true,
          message: "Password is required",
        },
        minLength: {
          value: 8,
          message: "Password must be at least 8 characters",
        },
        containUpperCase: {
          value: true,
          message: "Password must contain at least one uppercase letter",
        },
        containLowerCase: {
          value: true,
          message: "Password must contain at least one lowercase letter",
        },
        containNumber: {
          value: true,
          message: "Password must contain at least one number",
        },
        containSpecialChar: {
          value: true,
          message: "Password must contain at least one special character",
        },
      },
    } as TypePasswordFieldConfig,
    validationRules: `export interface TypeMatchFieldValidationRule {
  field: string;
  message?: string;
}`,
    fieldTypeDefinition: `export interface TypePasswordFieldConfig extends TypeBaseFieldConfig {
    type: "password";
    validation?: TypeValidationRules & {
      containNumber?: TypeGenericValidationRule;
      containSpecialChar?: TypeGenericValidationRule;
      containUpperCase?: TypeGenericValidationRule;
      containLowerCase?: TypeGenericValidationRule;
      preventCommonPassword?: TypeGenericValidationRule;
      matchField?: TypeMatchFieldValidationRule;
    };
  }`,
    componentOutline: `
  <FormwizPasswordField
    label="Password"
    placeholder="Enter your password"
    validation={{
      required: { value: true, message: "Password is required" },
      minLength: { value: 8, message: "Password must be at least 8 characters" },
      containUpperCase: { value: true, message: "Must contain uppercase letter" },
      containLowerCase: { value: true, message: "Must contain lowercase letter" },
      containNumber: { value: true, message: "Must contain a number" },
      containSpecialChar: { value: true, message: "Must contain special character" }
    }}
  />`,
    generatedCode: `import { Formwiz, TypeFormData, TypeFieldConfig, TypeFormConfig } from "formwiz";
  
  export default function FormwizDemo() {
    // Define form fields configuration
    const formFields: TypeFieldConfig[] = [
      {
        type: "password",
        name: "password",
        label: "Password",
        placeholder: "Enter your password",
        validation: {
          required: {
            value: true,
            message: "Password is required"
          },
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters"
          },
          containUpperCase: {
            value: true,
            message: "Password must contain at least one uppercase letter"
          },
          containLowerCase: {
            value: true,
            message: "Password must contain at least one lowercase letter"
          },
          containNumber: {
            value: true,
            message: "Password must contain at least one number"
          },
          containSpecialChar: {
            value: true,
            message: "Password must contain at least one special character"
          }
        },
      }
    ];
  
    // Construct the form configuration
    const config: TypeFormConfig = {
      fields: formFields,
      onSubmit: (data: TypeFormData, formUtils) => {
        console.log(data);
        formUtils.reset();
      },
    };
  
    return (
      <div>
        <Formwiz config={config} />
      </div>
    );
  }`,
    customCodeUsage: `import { useForm } from "react-hook-form";
    import { FormwizPasswordField, TypeFormData } from "formwiz";
    
    
    export default function FormwizPasswordFieldDemo() {
      const theme = {
        // define theme for the field
        // refer to themes section for more details
      };
      const {
        control,
        formState: { errors },
        handleSubmit,
      } = useForm();
    
      function onSubmit(data: TypeFormData) {
        console.log(data);
      }
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* The FormwizEmailField component only renders the input field.
              It does not include a label or error message by default.
              You need to manually add them for better accessibility and user feedback. 
        */}
          <label htmlFor="password">Password</label>
          {errors.password && (
            <span className="text-red-500">
              {(errors.password.message as string) ?? "Required"}
            </span>
          )}
    
          <FormwizPasswordField
            field={{
              type: "password",
              name: "password",
              label: "Password",
              placeholder: "Enter your password",
              control={control}
              errors={errors}
              theme={theme}
          />
        </form>
      );
    }
    `,
  },
  {
    type: "number",
    name: "number",
    config: {
      type: "number" as const,
      name: "quantity",
      label: "Quantity",
      placeholder: "Enter quantity",
      validation: {
        required: {
          value: true,
          message: "Quantity is required",
        },
        min: {
          value: 1,
          message: "Minimum quantity is 1",
        },
        max: {
          value: 100,
          message: "Maximum quantity is 100",
        },
      },
    } as TypeNumberFieldConfig,
    validationRules: `export interface TypeValidationRules {
        min?: TypeGenericValidationRule;
        max?: TypeGenericValidationRule;
        pattern?: TypeGenericValidationRule;
        required?: TypeGenericValidationRule;
      }`,
    fieldTypeDefinition: `export interface TypeNumberFieldConfig extends TypeBaseFieldConfig {
    type: "number";
  }`,
    componentOutline: `
  <FormwizNumberField
    label="Quantity"
    placeholder="Enter quantity"
    validation={{
      required: { value: true, message: "Quantity is required" },
      min: { value: 1, message: "Minimum quantity is 1" },
      max: { value: 100, message: "Maximum quantity is 100" }
    }}
  />`,
    generatedCode: `import { Formwiz, TypeFormData, TypeFieldConfig, TypeFormConfig } from "formwiz";
  
  export default function FormwizDemo() {
    // Define form fields configuration
    const formFields: TypeFieldConfig[] = [
      {
        type: "number",
        name: "quantity",
        label: "Quantity",
        placeholder: "Enter quantity",
        validation: {
          required: {
            value: true,
            message: "Quantity is required"
          },
          min: {
            value: 1,
            message: "Minimum quantity is 1"
          },
          max: {
            value: 100,
            message: "Maximum quantity is 100"
          }
        },
      }
    ];
  
    // Construct the form configuration
    const config: TypeFormConfig = {
      fields: formFields,
      onSubmit: (data: TypeFormData, formUtils) => {
        console.log(data);
        formUtils.reset();
      },
    };
  
    return (
      <div>
        <Formwiz config={config} />
      </div>
    );
  }`,
    customCodeUsage: `import { useForm } from "react-hook-form";
import { FormwizNumberField } from "formwiz";
  
export default function FormwizNumberFieldDemo() {
    const theme = {
      number: "border border-gray-300 rounded-md p-2",
    };
  
    const {
      control,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    function onSubmit(data) {
      console.log(data);
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>

       {/* The FormwizNumberField component only renders the input field.
          It does not include a label or error message by default.
          You need to manually add them for better accessibility and user feedback. 
    */}

        <label htmlFor="quantity">Quantity</label>
        {errors.quantity && <span className="text-red-500">{errors.quantity.message}</span>}
  
        <FormwizNumberField
          field={{
            type: "number",
            name: "quantity",
            label: "Quantity",
            placeholder: "Enter quantity",
            validation: {
              required: {
                value: true,
                message: "Quantity is required"
              },
              min: {
                value: 1,
                message: "Minimum quantity is 1"
              },
              max: {
                value: 100,
                message: "Maximum quantity is 100"
              }
            },
          }}
          control={control}
          errors={errors}
          theme={theme}
        />
      </form>
    );
  }`,
  },
  {
    type: "select",
    name: "select",
    config: {
      type: "select" as const,
      name: "country",
      label: "Country",
      placeholder: "Select your country",
      options: [
        { label: "United States", value: "us" },
        { label: "Canada", value: "ca" },
        { label: "United Kingdom", value: "uk" },
      ],
      validation: {
        required: {
          value: true,
          message: "Please select a country",
        },
      },
    } as TypeSelectFieldConfig,
    validationRules: `
export interface TypeValidationRules {
    required?: TypeGenericValidationRule;
}`,
    fieldTypeDefinition: `  
export interface TypeOption {
    label: string;
    value: string | number;
  }

export interface TypeSelectFieldConfig extends TypeBaseFieldConfig {
    type: "select";
    options: TypeOption[];
}
`,
    componentOutline: `
  <FormwizSelectField
    label="Country"
    placeholder="Select your country"
    options={[
      { label: "United States", value: "us" },
      { label: "Canada", value: "ca" },
      { label: "United Kingdom", value: "uk" }
    ]}
    validation={{
      required: { value: true, message: "Please select a country" }
    }}
  />`,
    generatedCode: `import { Formwiz, TypeFormData, TypeFieldConfig, TypeFormConfig } from "formwiz";
  
  export default function FormwizDemo() {
    // Define form fields configuration
    const formFields: TypeFieldConfig[] = [
      {
        type: "select",
        name: "country",
        label: "Country",
        placeholder: "Select your country",
        options: [
          { label: "United States", value: "us" },
          { label: "Canada", value: "ca" },
          { label: "United Kingdom", value: "uk" }
        ],
        validation: {
          required: {
            value: true,
            message: "Please select a country"
          },
        },
      }
    ];
  
    // Construct the form configuration
    const config: TypeFormConfig = {
      fields: formFields,
      onSubmit: (data: TypeFormData, formUtils) => {
        console.log(data);
        formUtils.reset();
      },
    };
  
    return (
      <div>
        <Formwiz config={config} />
      </div>
    );
  }`,
    customCodeUsage: `import { useForm } from "react-hook-form";
import { FormwizSelectField } from "formwiz";
  
export default function FormwizSelectFieldDemo() {
    const theme = {
      select: "border border-gray-300 rounded-md p-2",
    };
  
    const {
      control,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    function onSubmit(data) {
      console.log(data);
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>

       {/* The FormwizSelectField component only renders the input field.
          It does not include a label or error message by default.
          You need to manually add them for better accessibility and user feedback. 
    */}

        <label htmlFor="country">Country</label>
        {errors.country && <span className="text-red-500">{errors.country.message}</span>}
  
        <FormwizSelectField
          field={{
            type: "select",
            name: "country",
            label: "Country",
            placeholder: "Select your country",
            options: [
              { label: "United States", value: "us" },
              { label: "Canada", value: "ca" },
              { label: "United Kingdom", value: "uk" }
            ],
            validation: {
              required: {
                value: true,
                message: "Please select a country"
              },
            },
          }}
          control={control}
          errors={errors}
          theme={theme}
        />
      </form>
    );
  }`,
  },
  {
    type: "textarea",
    name: "textarea",
    config: {
      type: "textarea" as const,
      name: "description",
      label: "Description",
      placeholder: "Enter description",
      rows: 4,
      validation: {
        required: {
          value: true,
          message: "Description is required",
        },
        maxLength: {
          value: 500,
          message: "Maximum 500 characters allowed",
        },
      },
    } as TypeTextAreaFieldConfig,
    validationRules: `export interface TypeValidationRules {
    minLength?: TypeGenericValidationRule;
    maxLength?: TypeGenericValidationRule;
    pattern?: TypeGenericValidationRule;
    required?: TypeGenericValidationRule;
}`,
    fieldTypeDefinition: `export interface TypeTextAreaFieldConfig extends TypeBaseFieldConfig {
    type: "textarea";
    rows?: number;
  }`,
    componentOutline: `
  <FormwizTextAreaField
    label="Description"
    placeholder="Enter description"
    rows={4}
    validation={{
      required: { value: true, message: "Description is required" },
      maxLength: { value: 500, message: "Maximum 500 characters allowed" }
    }}
  />`,
    generatedCode: `import { Formwiz, TypeFormData, TypeFieldConfig, TypeFormConfig } from "formwiz";
  
  export default function FormwizDemo() {
    // Define form fields configuration
    const formFields: TypeFieldConfig[] = [
      {
        type: "textarea",
        name: "description",
        label: "Description",
        placeholder: "Enter description",
        rows: 4,
        validation: {
          required: {
            value: true,
            message: "Description is required"
          },
          maxLength: {
            value: 500,
            message: "Maximum 500 characters allowed"
          }
        },
      }
    ];
  
    // Construct the form configuration
    const config: TypeFormConfig = {
      fields: formFields,
      onSubmit: (data: TypeFormData, formUtils) => {
        console.log(data);
        formUtils.reset();
      },
    };
  
    return (
      <div>
        <Formwiz config={config} />
      </div>
    );
  }`,
    customCodeUsage: `import { useForm } from "react-hook-form";
import { FormwizTextAreaField } from "formwiz";
  
export default function FormwizTextAreaFieldDemo() {
    const theme = {
      textarea: "border border-gray-300 rounded-md p-2",
    };
  
    const {
      control,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    function onSubmit(data) {
      console.log(data);
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>

       {/* The FormwizTextAreaField component only renders the input field.
          It does not include a label or error message by default.
          You need to manually add them for better accessibility and user feedback. 
    */}

        <label htmlFor="description">Description</label>
        {errors.description && <span className="text-red-500">{errors.description.message}</span>}
  
        <FormwizTextAreaField
          field={{
            type: "textarea",
            name: "description",
            label: "Description",
            placeholder: "Enter description",
            rows: 4,
            validation: {
              required: {
                value: true,
                message: "Description is required"
              },
              maxLength: {
                value: 500,
                message: "Maximum 500 characters allowed"
              }
            },
          }}
          control={control}
          errors={errors}
          theme={theme}
        />
      </form>
    );
  }`,
  },
  {
    type: "checkbox",
    name: "checkbox",
    config: {
      type: "checkbox" as const,
      name: "terms",
      label: "I agree to the terms and conditions",
      validation: {
        required: {
          value: true,
          message: "You must agree to the terms",
        },
      },
    } as TypeCheckboxFieldConfig,
    validationRules: `export interface TypeValidationRules {
        required?: TypeGenericValidationRule;
      }`,
    fieldTypeDefinition: `export interface TypeCheckboxFieldConfig extends TypeBaseFieldConfig {
    type: "checkbox";
    label: string;
  }`,
    componentOutline: `
  <FormwizCheckboxField
    label="I agree to the terms and conditions"
    validation={{
      required: { value: true, message: "You must agree to the terms" }
    }}
  />`,
    generatedCode: `import { Formwiz, TypeFormData, TypeFieldConfig, TypeFormConfig } from "formwiz";
  
  export default function FormwizDemo() {
    // Define form fields configuration
    const formFields: TypeFieldConfig[] = [
      {
        type: "checkbox",
        name: "terms",
        label: "I agree to the terms and conditions",
        validation: {
          required: {
            value: true,
            message: "You must agree to the terms"
          }
        },
      }
    ];
  
    // Construct the form configuration
    const config: TypeFormConfig = {
      fields: formFields,
      onSubmit: (data: TypeFormData, formUtils) => {
        console.log(data);
        formUtils.reset();
      },
    };
  
    return (
      <div>
        <Formwiz config={config} />
      </div>
    );
  }`,
    customCodeUsage: `import { useForm } from "react-hook-form";
  import { FormwizCheckboxField } from "formwiz";
  
  export default function FormwizCheckboxFieldDemo() {
    const theme = {
      checkbox: "h-4 w-4 rounded border-gray-300 text-blue-600",
    };
    {/* The FormifyCheckboxField component only renders the input field.
          It does not include a label or error message by default.
          You need to manually add them for better accessibility and user feedback. 
    */}

    const {
      control,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    function onSubmit(data) {
      console.log(data);
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.terms && <span className="text-red-500">{errors.terms.message}</span>}
  
        <FormwizCheckboxField
          field={{
            type: "checkbox",
            name: "terms",
            label: "I agree to the terms and conditions",
            validation: {
              required: {
                value: true,
                message: "You must agree to the terms"
              }
            },
          }}
          control={control}
          errors={errors}
          theme={theme}
        />
      </form>
    );
  }`,
  },
  {
    type: "radio",
    name: "radio",
    config: {
      type: "radio" as const,
      name: "gender",
      label: "Gender",
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Other", value: "other" },
      ],
      validation: {
        required: {
          value: true,
          message: "Please select a gender",
        },
      },
    } as TypeRadioFieldConfig,
    fieldTypeDefinition: `export interface TypeRadioFieldConfig extends TypeBaseFieldConfig {
    type: "radio";
    options: TypeOption[];
  }
  
  export interface TypeOption {
    label: string;
    value: string | number;
  }`,
    componentOutline: `
  <FormwizRadioField
    label="Gender"
    options={[
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" }
    ]}
    validation={{
      required: { value: true, message: "Please select a gender" }
    }}
  />`,
    generatedCode: `import { Formwiz, TypeFormData, TypeFieldConfig, TypeFormConfig } from "formwiz";
  
  export default function FormwizDemo() {
    // Define form fields configuration
    const formFields: TypeFieldConfig[] = [
      {
        type: "radio",
        name: "gender",
        label: "Gender",
        options: [
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" }
        ],
        validation: {
          required: {
            value: true,
            message: "Please select a gender"
          }
        },
      }
    ];
  
    // Construct the form configuration
    const config: TypeFormConfig = {
      fields: formFields,
      onSubmit: (data: TypeFormData, formUtils) => {
        console.log(data);
        formUtils.reset();
      },
    };
  
    return (
      <div>
        <Formwiz config={config} />
      </div>
    );
  }`,
    customCodeUsage: `import { useForm } from "react-hook-form";
  import { FormwizRadioField } from "formwiz";
  
  export default function FormwizRadioFieldDemo() {
    const theme = {
      radio: "h-4 w-4 border-gray-300 text-blue-600",
    };
  
    const {
      control,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    function onSubmit(data) {
      console.log(data);
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <legend>Gender</legend>
        {errors.gender && <span className="text-red-500">{errors.gender.message}</span>}
  
        <FormwizRadioField
          field={{
            type: "radio",
            name: "gender",
            label: "Gender",
            options: [
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" }
            ],
            validation: {
              required: {
                value: true,
                message: "Please select a gender"
              }
            },
          }}
          control={control}
          errors={errors}
          theme={theme}
        />
      </form>
    );
  }`,
  },
  {
    type: "tel",
    name: "Phone",
    config: {
      type: "tel" as const,
      name: "tel",
      label: "Phone No.",
      placeholder: "Enter Phone Number",
      validation: {
        required: {
          value: true,
          message: "This field is required",
        },
        minLength: {
          value: 3,
          message: "Minimum 3 characters required",
        },
        maxLength: {
          value: 50,
          message: "Maximum 50 characters allowed",
        },
        pattern: {
          value: /^[0-9]*$/,
          message: "Only numbers are allowed",
        },
      },
    } as TypeTelFieldConfig,
    validationRules: `export interface TypeValidationRules {
        minLength?: TypeGenericValidationRule;
        maxLength?: TypeGenericValidationRule;
        pattern?: TypeGenericValidationRule;
        required?: TypeGenericValidationRule;
      }`,
    fieldTypeDefinition: `interface TypeValidationRules {
  pattern?: TypeGenericValidationRule;
  required?: TypeGenericValidationRule;
}

export interface TypeTextFieldConfig extends TypeBaseFieldConfig {
    type: "text";
  }`,
    componentOutline: `
  <FormwizTextField
    label="Text Field"
    placeholder="Enter text"
    validation={{
      required: { value: true, message: "This field is required" },
      minLength: { value: 3, message: "Minimum 3 characters required" },
      maxLength: { value: 50, message: "Maximum 50 characters allowed" }
    }}
  />`,
    generatedCode: `import { Formwiz, TypeFormData, TypeFieldConfig, TypeFormConfig } from "formwiz";
  
  export default function FormwizDemo() {
    // Define form fields configuration
    const formFields: TypeFieldConfig[] = [
      {
        type: "text",
        name: "textField",
        label: "Text Field",
        placeholder: "Enter text",
        validation: {
          required: {
            value: true,
            message: "This field is required"
          },
          minLength: {
            value: 3,
            message: "Minimum 3 characters required"
          },
          maxLength: {
            value: 50,
            message: "Maximum 50 characters allowed"
          }
        },
      }
    ];
  
    // Construct the form configuration
    const config: TypeFormConfig = {
      fields: formFields,
      onSubmit: (data: TypeFormData, formUtils) => {
        console.log(data);
        formUtils.reset();
      },
    };
  
    return (
      <div>
        <Formwiz config={config} />
      </div>
    );
  }`,
    customCodeUsage: `import { useForm } from "react-hook-form";
  import { FormwizTextField } from "formwiz";
  
  export default function FormwizTextFieldDemo() {
    const theme = {
      text: "border border-gray-300 rounded-md p-2",
    };
  
    const {
      control,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    function onSubmit(data) {
      console.log(data);
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="textField">Text Field</label>
        {errors.textField && <span className="text-red-500">{errors.textField.message}</span>}
  
        <FormwizTextField
          field={{
            type: "text",
            name: "textField",
            label: "Text Field",
            placeholder: "Enter text",
            validation: {
              required: {
                value: true,
                message: "This field is required"
              },
              minLength: {
                value: 3,
                message: "Minimum 3 characters required"
              },
              maxLength: {
                value: 50,
                message: "Maximum 50 characters allowed"
              }
            },
          }}
          control={control}
          errors={errors}
          theme={theme}
        />
      </form>
    );
  }`,
  },
];

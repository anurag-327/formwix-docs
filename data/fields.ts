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
} from "formwix";

export interface FieldDocConfig {
  type: string;
  name: string;
  description: string;
  config: TypeFieldConfig;
  fieldTypeDefinition: string;
  validationRules?: string;
}

export const formFields: FieldDocConfig[] = [
  {
    type: "text",
    name: "Text",
    description: "A simple text input field.",
    config: {
      type: "text" as const,
      name: "textField",
      label: "Text Field",
      placeholder: "Enter text",
      validation: {
        required: {
          value: true,
          message: "Required",
        },
        minLength: {
          value: 3,
          message: "Minimum 3 characters required",
        },
        maxLength: {
          value: 30,
          message: "Maximum 30 characters allowed",
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
  },
  {
    type: "email",
    name: "Email",
    description: "A field for entering email addresses.",
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
      },
    } as TypeEmailFieldConfig,
    validationRules: `export interface TypeValidationRules {
          pattern?: TypeGenericValidationRule;
          required?: TypeGenericValidationRule;
        }`,
    fieldTypeDefinition: `export interface TypeEmailFieldConfig extends TypeBaseFieldConfig {
      type: "email";
    }`,
  },
  {
    type: "password",
    name: "Password",
    description: "A field for entering passwords.",

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
  },
  {
    type: "number",
    name: "Number",
    description: "A field for entering numbers.",

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
  },
  {
    type: "select",
    name: "Select",
    description: "A dropdown field for selecting options.",

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
  },
  {
    type: "textarea",
    name: "Text Area",
    description: "A multi-line text input field.",

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
  },
  {
    type: "checkbox",
    name: "Checkbox",
    description: "A checkbox field for accepting terms and conditions.",

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
  },
  {
    type: "radio",
    name: "Radio",
    description: "A radio field for selecting a single option from a list.",

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
  },
  {
    type: "tel",
    name: "Tel (Phone)",
    description: "A field for entering telephone numbers.",
    config: {
      type: "tel" as const,
      name: "tel",
      label: "Phone No.",
      placeholder: "Enter Phone Number",
      validation: {
        required: {
          value: true,
          message: "Required",
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
          value: `/^[0-9]*$/`,
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
  },
  {
    type: "url",
    name: "Website",
    description: "A field for entering website URLs.",
    config: {
      type: "url" as const,
      name: "website",
      label: "Website",
      placeholder: "Enter your website URL",
      validation: {
        required: {
          value: true,
          message: "URL is required",
        },
      },
    } as TypeURLFieldConfig,
    validationRules: `export interface TypeValidationRules {
          required?: TypeGenericValidationRule;
        }`,
    fieldTypeDefinition: `export interface TypeURLFieldConfig extends TypeBaseFieldConfig {
      type: "url";
    }`,
  },
  {
    type: "datetime-local",
    name: "Date Time Local",
    description: "A field for selecting date and time.",
    config: {
      type: "datetime-local",
      name: "appointment",
      label: "Appointment Time",
      validation: {
        required: { value: true, message: "Appointment time is required" },
        minDate: {
          value: "2024-01-01T00:00",
          message: "Appointment must be after today",
        },
      },
    },
    fieldTypeDefinition: `export interface TypeDateTimeLocalFieldConfig extends TypeBaseFieldConfig {
      type: "datetime-local";
    }`,
    validationRules: `export interface TypeValidationRules {
       minDate?: TypeGenericValidationRule;
       maxDate?: TypeGenericValidationRule;
       required?: TypeGenericValidationRule;
    }`,
  },
  {
    type: "time",
    name: "Time",
    description: "A field for selecting time.",
    config: {
      type: "time",
      name: "time",
      label: "Time",
      validation: {
        required: { value: true, message: "Time is required" },
      },
    },

    fieldTypeDefinition: `export interface TypeTimeFieldConfig extends TypeBaseFieldConfig {
      type: "time";
    }`,
    validationRules: `export interface TypeValidationRules {
       required?: TypeGenericValidationRule;
    }`,
  },
  {
    type: "date",
    name: "Date",
    description: "A field for selecting time.",
    config: {
      type: "date",
      name: "dob",
      label: "Date of Birth",
      validation: {
        required: { value: true, message: "Date of birth is required" },
        minDate: { value: "1990-01-01", message: "Date must be after 1990" },
        maxDate: {
          value: "2025-12-31",
          message: "Date cannot be in the future",
        },
      },
    },
    fieldTypeDefinition: `export interface TypeDateFieldConfig extends TypeBaseFieldConfig {
      type: "time";
    }`,
    validationRules: `export interface TypeValidationRules {
       required?: TypeGenericValidationRule;
       minDate?: TypeGenericValidationRule;
       maxDate?: TypeGenericValidationRule;
    }`,
  },
  {
    type: "multiselect",
    name: "Multi Select",
    description: "A field for selecting multiple options from a list.",
    config: {
      type: "multiselect",
      name: "skills",
      label: "Skills",
      options: [
        { label: "JavaScript", value: "js" },
        { label: "TypeScript", value: "ts" },
        { label: "React", value: "react" },
        { label: "Node.js", value: "node" },
      ],
      validation: {
        required: { value: true, message: "Please select at least one skill" },
      },
    },
    fieldTypeDefinition: `export interface TypeMultiSelectFieldConfig extends TypeBaseFieldConfig {
      type: "multiselect";
      options: TypeOption[];
    }`,
    validationRules: `export interface TypeValidationRules {
      required?: TypeGenericValidationRule;
    }`,
  },
];

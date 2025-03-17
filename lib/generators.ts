export function generatePreviewCode({ fields }: { fields: any[] }) {
  return `import { Formwiz, TypeFormData, TypeFieldConfig, TypeFormConfig } from "formwiz";

// default css styles
// You can manage your own styles by passing theme props to Formwiz component
// refer to themes section for more details
   
  
export default function FormwizDemo() {
      // Define form fields configuration
    const formFields: TypeFieldConfig[] =[${formatFields(fields, 2)}]
      
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
          {/* You can optionally pass themes props to manage styles */}
          <Formwiz config={config} />
        </div>
    );
}`;
}

export function formatConfig(config: any, space = 6): string {
  return JSON.stringify(config, null, space)
    .replace(/"([^"]+)":/g, "$1:")
    .replace(/"([^"]+)"/g, "'$1'");
}

export function formatFields(fields: any[], space = 6): string {
  console.log(fields);
  return fields.map((field: any) => formatConfig(field, space)).join(",\n");
}
function joinWithCommas(items: string[]): string {
  return items.join(", ");
}

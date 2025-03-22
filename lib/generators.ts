export function generatePreviewCode({ fields }: { fields: any[] }) {
  return `import { Formwix, TypeFormData, TypeFieldConfig, TypeFormConfig } from "formwix";

// default css styles
// You can manage your own styles by passing theme props to Formwix component
// refer to themes section for more details
   
  
export default function FormwixDemo() {
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
          <Formwix config={config} />
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
  return fields.map((field: any) => formatConfig(field, space)).join(",\n");
}
function joinWithCommas(items: string[]): string {
  return items.join(", ");
}

"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/Codeblock";
import { TypeFieldConfig, TypeFormConfig } from "formwiz";

import FormwizRunner from "../docs/ui/FormwizRunner";
import { generatePreviewCode } from "@/lib/generators";
import { FieldDocConfig } from "@/data/fields";
type Props = {
  data: FieldDocConfig;
};

export default function FormFieldDocs({ data }: Props) {
  const genericValidationRule = `interface TypeGenericValidationRule {
    value: number | string | RegExp | boolean;
    message?: string;
  }`;
  const baseFieldConfig = `interface TypeBaseFieldConfig {
    type: string;
    name: string;
    label: string;
    placeholder?: string;
    value?: string;
    validation?: TypeValidationRules;
    description?: string;
    theme?:Partial<typeof defaultTheme>;
    disabled?: boolean;
  }`;
  const fieldTypes = `${genericValidationRule}\n ${baseFieldConfig}\n${data.validationRules}\n${data.fieldTypeDefinition}`;
  const fields = [data.config];
  return (
    <Tabs defaultValue="preview" className="w-full max-w-2xl  mx-auto text-sm">
      <TabsList className=" bg-white shadow-none border-b rounded-none border-gray-200 p-0 w-full justify-start mb-4">
        <TabsTrigger
          value="preview"
          className="pb-2 rounded-none shadow-none border-b-2 border-transparent data-[state=active]:border-b-black data-[state=active]:rounded-none data-[state=active]:bg-transparent  data-[state=active]:shadow-none "
        >
          Preview
        </TabsTrigger>

        <TabsTrigger
          value="code"
          className="pb-2 rounded-none shadow-none border-b-2 border-transparent data-[state=active]:border-b-black data-[state=active]:rounded-none data-[state=active]:bg-transparent  data-[state=active]:shadow-none "
        >
          Code
        </TabsTrigger>

        {fieldTypes && (
          <TabsTrigger
            value="types"
            className="pb-2 rounded-none shadow-none border-b-2 border-transparent data-[state=active]:border-b-black data-[state=active]:rounded-none data-[state=active]:bg-transparent  data-[state=active]:shadow-none "
          >
            Types
          </TabsTrigger>
        )}
      </TabsList>

      <TabsContent value="preview">
        <Card className="h-[400px] w-full flex justify-center items-center shadow-none">
          <CardContent className="p-4 w-full md:w-[400px]">
            <FormwizRunner fields={fields as TypeFieldConfig[]} />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="code">
        <Card className="w-full h-[400px] shadow-none overflow-hidden">
          <CodeBlock
            code={generatePreviewCode({
              fields,
            })}
            lang="jsx"
          />
        </Card>
      </TabsContent>

      {fieldTypes && (
        <TabsContent value="types">
          <Card className="w-full h-[400px] shadow-none overflow-hidden">
            <CodeBlock code={fieldTypes} lang="jsx" />
          </Card>
        </TabsContent>
      )}
    </Tabs>
  );
}

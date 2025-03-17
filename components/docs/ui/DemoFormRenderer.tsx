"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/Codeblock";
import {
  Formwiz,
  TypeFieldConfig,
  TypeFormConfig,
  TypeFormData,
} from "formwiz";

import FormwizRunner from "./FormwizRunner";
import { generatePreviewCode } from "@/lib/generators";
type formConfig = {
  name: string;
  slug: string;
  description: string;
  fields: TypeFieldConfig[];
};
type Props = {
  data: formConfig;
};

export default function DemoFormRenderer({ data }: Props) {
  const fields = data.fields;
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
      </TabsList>

      <TabsContent value="preview">
        <Card className="h-[450px] overflow-scroll w-full flex justify-center items-center shadow-none">
          <CardContent className="h-full overflow-scroll flex justify-center items-center w-full md:w-[500px]">
            <FormwizRunner fields={fields} />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="code">
        <Card className="w-full h-[450px] shadow-none overflow-hidden">
          <CodeBlock
            code={generatePreviewCode({ fields: fields as any })}
            lang="jsx"
          />
        </Card>
      </TabsContent>
    </Tabs>
  );
}

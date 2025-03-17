"use client";
import { Formwiz, TypeFieldConfig, TypeFormData } from "formwiz";
import { toast } from "sonner";
import "formwiz/dist/formwiz.css";
export default function FormwizRunner({
  fields,
}: {
  fields: TypeFieldConfig[];
}) {
  return (
    <Formwiz
      config={{
        fields: fields,
        onSubmit: (data: TypeFormData) => {
          toast(
            <div className="flex flex-col w-full gap-2">
              <h2>You Submitted form with following details</h2>
              <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
                <code className="text-white">
                  {JSON.stringify(data, null, 2)}
                </code>
              </pre>
            </div>,
            {
              duration: 5000,
            }
          );
        },
      }}
    />
  );
}

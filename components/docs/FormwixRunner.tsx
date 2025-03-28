"use client";
import { Formwix, TypeFieldConfig, TypeFormData } from "formwix";
import { toast } from "sonner";
import "formwix/dist/formwix.css";
export default function FormwixRunner({
  fields,
}: {
  fields: TypeFieldConfig[];
}) {
  return (
    <Formwix
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

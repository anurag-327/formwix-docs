import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { Card } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/Codeblock";
import FormFieldDocs from "@/components/ui/FormFieldDoc";
import { formFields } from "@/data/fields";
import { formatConfig, generatePreviewCode } from "@/lib/generators";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = formFields.find((field) => field.type === slug);
  const breadcrumbItems = [
    { name: "Docs", href: "/docs" },
    { name: "Components", href: "/docs/components" },
    { name: "Input", href: "/docs/components/input" },
    { name: data?.name ?? "" },
  ];
  if (!data) return notFound();

  return (
    <div className="max-w-3xl no-scrollbar leading-[1.65rem]">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="text-4xl font-bold tracking-tight mb-2">{data.name}</h1>
      <p className="text-base mt-2 text-muted-foreground">{data.description}</p>
      <div className="pb-12 pt-8">
        <FormFieldDocs data={data} />
      </div>
      <h1 className="scroll-m-20 mb-2 text-3xl font-bold tracking-tight">
        API Reference
      </h1>
      <p className="text-muted-foreground mb-4 text-sm">
        Detailed reference for the <strong>{data.name}</strong> field, including
        validation rules, props, and more.
      </p>

      <Card className="w-full max-h-[650px] mb-8 shadow-none overflow-hidden">
        <CodeBlock code={formatConfig(data.config, 2)} />
      </Card>
    </div>
  );
}

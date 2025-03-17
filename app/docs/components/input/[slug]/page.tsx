import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
  if (!data) return notFound();

  return (
    <div className="max-w-2xl no-scrollbar">
      <Breadcrumbs slug={slug} />
      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
        {data.name}
      </h1>
      <p className="text-base mt-2 text-muted-foreground">{data.description}</p>
      <div className="pb-12 pt-8">
        <FormFieldDocs data={data} />
      </div>
      <h1 className="scroll-m-20 mb-8 text-3xl font-bold tracking-tight">
        Config
      </h1>
      <Card className="w-full max-h-[650px] mb-8 shadow-none overflow-hidden">
        <CodeBlock code={formatConfig(data.config, 2)} />
      </Card>
    </div>
  );
}

function Breadcrumbs({ slug }: { slug: string }) {
  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components/input">Input</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{slug}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

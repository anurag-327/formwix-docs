import DemoFormRenderer from "@/components/docs/ui/DemoFormRenderer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { forms } from "@/data/forms";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = forms.find((field) => field.slug === slug);
  if (!data) return notFound();
  return (
    <div className="max-w-2xl no-scrollbar">
      <Breadcrumbs slug={slug} />
      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
        {data.name}
      </h1>
      <p className="text-base mt-2 text-muted-foreground">{data.description}</p>
      <div className="pb-12 pt-8">
        <DemoFormRenderer data={data} />
      </div>
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
          <BreadcrumbLink href="/docs/components/forms">Forms</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{slug}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

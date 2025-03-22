import DemoFormRenderer from "@/components/docs/ui/DemoFormRenderer";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { forms } from "@/data/forms";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = forms.find((field) => field.slug === slug);
  const breadcrumbItems = [
    { name: "Docs", href: "/docs" },
    { name: "Components", href: "/docs/components" },
    { name: "Forms", href: "/docs/components/forms" },
    { name: data?.name ?? "" },
  ];
  if (!data) return notFound();
  return (
    <div className="max-w-3xl no-scrollbar">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="text-4xl font-bold tracking-tight mb-2">{data.name}</h1>
      <p className="text-base mt-2 text-muted-foreground">{data.description}</p>
      <div className="pb-12 pt-8">
        <DemoFormRenderer data={data} />
      </div>
    </div>
  );
}

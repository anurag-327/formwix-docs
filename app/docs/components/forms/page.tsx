import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { forms } from "@/data/forms";

export default function Page() {
  const breadcrumbItems = [
    { name: "Docs", href: "/docs" },
    { name: "Examples" },
  ];

  return (
    <div className="max-w-3xl mb-8 leading-[1.65rem]">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="text-3xl font-bold tracking-tight mt-6">Examples</h1>
      <p className="text-muted-foreground mb-6 mt-2">
        Examples of different form fields and their usage.
      </p>

      {/* Grid Layout for Field Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {forms.map((field, index) => (
          <a
            href={`/docs/components/forms/${field.slug}`}
            key={index}
            className="border hover:bg-gray-100 dark:hover:bg-zinc-800 border-gray-300 dark:border-gray-800 p-3 rounded-md text-sm shadow-sm bg-primary-foreground dark:bg-primary-background"
          >
            <span className=" font-semibold text-base">{field.name}</span>
            <p className="text-sm mt-1 text-gray-500">{field.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

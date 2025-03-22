import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { CodeBlock } from "@/components/ui/Codeblock";
import { ChevronRight } from "lucide-react";

export default function InstallationPage() {
  const breadcrumbItems = [
    { name: "Docs", href: "/docs" },
    { name: "Installation" },
  ];

  return (
    <div className="max-w-3xl mb-8">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="text-4xl font-bold tracking-tight mb-2">Installation</h1>
      <p className="text-muted-foreground mb-8">
        Installing Formwix is quick and straightforward. It requires React Hook
        Form and Zod as peer dependencies.
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Install Formwix</h2>
        <p className="mb-4 leading-[1.65rem]">
          To get started, install Formwix along with its peer dependencies using
          npm:
        </p>
        <div className="max-h-[500px] rounded-lg overflow-scroll">
          <CodeBlock code={`npm install formwix react-hook-form zod`} />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Usage</h2>
        <p className="mb-4 leading-[1.65rem]">
          After installation, import the components and styles to start using
          Formwix in your project:
        </p>
        <div className="max-h-[500px] rounded-lg overflow-scroll">
          <CodeBlock
            code={`import { Formwix } from "formwix";
import "formwix/dist/formwix.css";`}
          />
        </div>
      </div>

      <div className="flex justify-end ">
        <a
          href="/docs/styles-themes"
          className="rounded-md text-sm px-4 py-2 font-semibold flex items-center hover:bg-gray-100"
        >
          <span>Styling and theming</span>
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

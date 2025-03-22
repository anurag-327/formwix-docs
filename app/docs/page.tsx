import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { CodeBlock } from "@/components/ui/Codeblock";
import { sampleCode } from "@/data/data";
import { ChevronRight } from "lucide-react";

export default function Page() {
  const breadcrumbItems = [
    { name: "Docs", href: "/docs" },
    { name: "Introduction" },
  ];
  return (
    <div className="max-w-3xl mb-8">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="text-4xl font-bold tracking-tight mb-2">Introduction</h1>
      <p className="text-muted-foreground mb-8">
        Formwix is a dynamic, configuration-based form builder for React
        applications that simplifies complex form creation while maintaining
        complete flexibility. Built on the robust foundation of React Hook Form
        and using Zod for powerful validation.
      </p>
      <div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">What is formwix?</h2>

          <p className="mb-4">
            Formwix is a configuration-driven form builder for React
            applications, built on top of React Hook Form and Zod. It allows you
            to define forms using a single configuration object, specifying
            fields, validation rules, and behavior without repetitive
            boilerplate code. Formwix is uncontrolled and performant, ensuring
            high performance with minimal re-renders and full TypeScript
            support.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">
          Formwix is not just another form library—it&apos;s a complete form
          management system.
        </h2>
        <p className="leading-[1.65rem] [&:not(:first-child)]:mt-6">
          Most form libraries provide pre-built components, but customizing them
          to fit your design system or adding new field types often requires
          extra effort. You might end up wrapping components, overriding styles,
          or combining multiple libraries with incompatible APIs.
        </p>
        <p className="leading-[1.65rem] [&:not(:first-child)]:mt-6">
          Formwix simplifies form creation by allowing you to define forms using
          configurations instead of manually wiring up components. It also
          provides built-in theming support, enabling seamless styling while
          maintaining flexibility.
        </p>
        <p className="leading-[1.65rem] [&:not(:first-child)]:mt-6">
          By reducing boilerplate and offering full customization, Formwix helps
          developers build complex forms faster without compromising on control
          or design.
        </p>
        <ul className="space-y-4 mb-8 mt-4 list-disc pl-6">
          <li>
            <strong>Configuration-Driven:</strong> Build forms using a single
            configuration object, defining fields, validation rules, and
            behavior without repetitive boilerplate.
          </li>
          <li>
            <strong>Uncontrolled & Performant:</strong> Built on React Hook Form
            and Zod, ensuring high performance with minimal re-renders and full
            TypeScript support.
          </li>
          <li>
            <strong>Flexible Theming:</strong> Style forms globally, per form,
            or at the individual field level using the built-in theming system.
          </li>
          <li>
            <strong>Extensible Field System:</strong> Supports a rich set of
            built-in field types while allowing custom field components for
            maximum flexibility.
          </li>
          <li>
            <strong>Seamless Form Management:</strong> Handles validation,
            submission, and state management effortlessly, letting you focus on
            building great user experiences.
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
        <p className="mb-4 leading-[1.65rem]">
          With Formwix, creating a fully functional, validated form is as simple
          as:
        </p>
        <div className="max-h-[500px] rounded-lg overflow-scroll">
          <CodeBlock code={sampleCode} />
        </div>
      </div>

      <div className="flex justify-end ">
        <a
          href="/docs/installation"
          className="rounded-md text-sm px-4 py-2 font-semibold flex items-center  hover:bg-gray-100"
        >
          <span>Installation</span>
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

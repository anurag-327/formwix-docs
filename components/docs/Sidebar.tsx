"use client";
import { formFields } from "@/data/fields";
import { forms } from "@/data/forms";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Section = "Getting Started" | "Components" | "Forms";
export default function DocsSidebar() {
  const pathname = usePathname();
  const inputLinks: { name: string; href: string; slug: string }[] =
    formFields.map((field) => {
      return {
        name: field.name,
        href: `/docs/components/input/${field.type}`,
        slug: field.type,
      };
    });
  const formLinks: { name: string; href: string; slug: string }[] = forms.map(
    (field) => {
      return {
        name: field.name,
        href: `/docs/components/forms/${field.slug}`,
        slug: field.slug,
      };
    }
  );
  const links: Record<Section, { name: string; href: string; slug: string }[]> =
    {
      "Getting Started": [
        { name: "Introduction", href: "/docs", slug: "docs" },
        {
          name: "Installation",
          href: "/docs/installation",
          slug: "installation",
        },
        {
          name: "Styling and Theming",
          href: "/docs/styles-themes",
          slug: "styles-themes",
        },
        { name: "Fields", href: "/docs/fields", slug: "fields" },
        { name: "Validations", href: "/docs/validations", slug: "validations" },
        {
          name: "API Reference",
          href: "/docs/api-reference",
          slug: "api-reference",
        },
      ],
      Components: inputLinks,
      Forms: formLinks,
    };
  return (
    <>
      <aside className="md:w-[260px] md:flex hidden px-4 py-8 h-full overflow-scroll no-scrollbar">
        <div className="flex flex-col gap-8">
          {Object.keys(links).map((section) => (
            <div key={section} className="flex flex-col gap-1">
              <h2 className="text-sm font-bold p-1.5 rounded-lg">{section}</h2>
              <ul className="flex flex-col gap-1">
                {links[section as Section].map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      href={link.href}
                      key={link.slug}
                      className={`group relative flex h-8 w-full items-center text-sm rounded-lg px-2 hover:bg-accent
                      ${isActive ? "bg-gray-100 dark:bg-zinc-800 " : ""}`}
                      prefetch={true}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}

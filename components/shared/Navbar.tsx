"use client";
import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { Waveform } from "@phosphor-icons/react/dist/ssr";
import DocsSearch from "./DocsSearch";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { formFields } from "@/data/fields";
import { forms } from "@/data/forms";
type Section = "Getting Started" | "Components" | "Forms";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "light" : "dark");
    setIsDark(!isDark);
  };
  useLayoutEffect(() => {
    localStorage.getItem("theme") === "dark" && setIsDark(true);
  }, []);
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
  const navItems = [
    { label: "Docs", href: "/docs" },
    { label: "Components", href: "/docs/components/input" },
    { label: "Examples", href: "/docs/components/forms" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-[88rem] mx-auto">
        <div className="flex justify-between px-4 md:px-6 py-3">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <div className="flex items-center gap-1">
                  <Waveform className="h-6 w-6 text-blue-600" weight="bold" />
                  <span className="font-bold">Formwix</span>
                </div>
              </Link>
            </div>
            <div className="hidden leading-tight sm:ml-6 sm:flex sm:space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? " dark:border-white font-medium text-blue-500"
                      : "text-muted-foreground hover:text-primary dark:hover:text-gray-300"
                  } inline-flex items-center px-1 pt-1 text-sm`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 gap-1 sm:flex sm:items-center">
            <DocsSearch />
            <Button variant="outline" className="px-1">
              <Link
                href="https://github.com/anurag-327/formwix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-300 p-1.5"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </Button>
            <Button onClick={toggleTheme} variant="outline" className="px-1">
              <div className="text-gray-800 dark:text-gray-300 p-1.5">
                {isDark ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </div>
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <Drawer>
              <DrawerTrigger>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </DrawerTrigger>
              <DrawerContent className="fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background max-h-[80svh] p-0">
                <DrawerHeader></DrawerHeader>
                <DrawerDescription className="h-full overflow-y-scroll">
                  <div className="pt-2 pb-3 space-y-1 text-black dark:text-white">
                    {Object.keys(links).map((section) => (
                      <div key={section} className="flex flex-col gap-1">
                        <h2 className="text-sm font-bold p-1.5 rounded-lg ">
                          {section}
                        </h2>
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
                </DrawerDescription>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
      {/* Mobile menu, toggle classes based on menu state */}
      <div className="sm:hidden hidden">
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${
                pathname === item.href
                  ? "border-black dark:border-white text-black dark:text-white"
                  : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

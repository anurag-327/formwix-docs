"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GithubIcon, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navItems = [
    { label: "Docs", href: "/docs" },
    { label: "Components", href: "/docs/components/input" },
    { label: "Examples", href: "/docs/forms" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-[88rem] mx-auto">
        <div className="flex justify-between px-6 py-3">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <div className="flex items-center">
                  <span className="font-bold">Formwiz</span>
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
                      ? "border-black dark:border-white text-black dark:text-white"
                      : "border-transparent text-gray-700 hover:text-gray-700 dark:hover:text-gray-300"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              href="https://github.com/shadcn/ui"
              className="text-gray-800 hover:bg-gray-100 p-1.5 rounded-md"
            >
              <GithubIcon className="h-4 w-4" />
            </Link>

            <button
              onClick={toggleTheme}
              className="text-gray-800 hover:bg-gray-100 p-1.5 rounded-md"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
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
            </button>
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

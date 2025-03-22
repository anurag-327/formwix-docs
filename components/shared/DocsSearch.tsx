import { CommandIcon } from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { File, Textbox } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { formFields } from "@/data/fields";
import { forms } from "@/data/forms";

export default function DocsSearch() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  const router = useRouter();
  const links = [
    { name: "Introduction", href: "/docs", slug: "docs" },
    { name: "Installation", href: "/docs/installation", slug: "installation" },
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
  ];
  const fields: { name: string; href: string; slug: string }[] = formFields.map(
    (field) => {
      return {
        name: field.name,
        href: `/docs/components/input/${field.type}`,
        slug: field.type,
      };
    }
  );
  const formsLinks: { name: string; href: string; slug: string }[] = forms.map(
    (field) => {
      return {
        name: field.name,
        href: `/docs/components/forms/${field.slug}`,
        slug: field.slug,
      };
    }
  );

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className="text-muted-foreground font-normal rounded-lg text-sm pl-4 pr-2"
      >
        <span>Search Documentation...</span>
        <div className="flex ml-2 items-center border px-1 py-1 rounded-md gap-0.5 text-xs">
          <CommandIcon className="h-2 w-2" />K
        </div>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className=" md:min-w-[450px]">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Links">
              {links.map((link) => (
                <CommandItem
                  key={link.slug}
                  value={link.name}
                  onClick={() => router.push(link.href)}
                  onSelect={() => router.push(link.href)}
                  className="cursor-pointer px-4 py-2 flex items-center space-x-2"
                >
                  <File size={30} />
                  <span>{link.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Fields">
              {fields.map((link) => (
                <CommandItem
                  key={link.slug}
                  value={link.name}
                  onClick={() => router.push(link.href)}
                  onSelect={() => router.push(link.href)}
                  className="cursor-pointer px-4 py-2 flex items-center space-x-2"
                >
                  <Textbox size={30} />
                  <span>{link.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Examples">
              {formsLinks.map((link) => (
                <CommandItem
                  key={link.slug}
                  value={link.name}
                  onClick={() => router.push(link.href)}
                  onSelect={() => router.push(link.href)}
                  className="cursor-pointer px-4 py-2 flex items-center space-x-2"
                >
                  <File size={30} />
                  <span>{link.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}

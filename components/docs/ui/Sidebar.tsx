import Link from "next/link";

type Section = "Getting Started" | "Components" | "Forms";

export default function DocsSidebar() {
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
          name: "Theme",
          href: "/docs/theme",
          slug: "theme",
        },
        { name: "Types", href: "/docs/types", slug: "types" },
        { name: "Validations", href: "/docs/validations", slug: "validations" },
      ],
      Components: [
        { name: "Text", href: "/docs/components/input/text", slug: "text" },
        {
          name: "Number",
          href: "/docs/components/input/number",
          slug: "number",
        },
        { name: "Email", href: "/docs/components/input/email", slug: "email" },
        {
          name: "Password",
          href: "/docs/components/input/password",
          slug: "password",
        },
        {
          name: "Checkbox",
          href: "/docs/components/input/checkbox",
          slug: "checkbox",
        },
        { name: "Radio", href: "/docs/components/input/radio", slug: "radio" },
        {
          name: "Select",
          href: "/docs/components/input/select",
          slug: "select",
        },
        {
          name: "Textarea",
          href: "/docs/components/input/textarea",
          slug: "textarea",
        },
        { name: "Tel", href: "/docs/components/input/tel", slug: "tel" },
        { name: "URL", href: "/docs/components/input/url", slug: "url" },
        { name: "Date", href: "/docs/components/input/date", slug: "date" },
        {
          name: "Datetime-local",
          href: "/docs/components/input/datetime-local",
          slug: "datetime-local",
        },
        {
          name: "Time",
          href: "/docs/components/input/time",
          slug: "time",
        },
        {
          name: "Multi Select",
          href: "/docs/components/input/multiselect",
          slug: "multiselect",
        },
      ],
      Forms: [
        {
          name: "Login Form",
          href: "/docs/components/forms/login",
          slug: "login",
        },
        {
          name: "Sign Up Form",
          href: "/docs/components/forms/signup",
          slug: "signup",
        },
        {
          name: "Appointment Booking Form",
          href: "/docs/components/forms/appointment-booking",
          slug: "appointment-booking",
        },
        {
          name: "Checkout Form",
          href: "/docs/components/forms/checkout",
          slug: "checkout",
        },
        {
          name: "Contact Form",
          href: "/docs/components/forms/contact",
          slug: "contact",
        },
        {
          name: "Feedback Form",
          href: "/docs/components/forms/feedback",
          slug: "feedback",
        },
        {
          name: "Forgot Password Form",
          href: "/docs/components/forms/forgot-password",
          slug: "forgot-password",
        },
        {
          name: "Payment Form",
          href: "/docs/components/forms/payment",
          slug: "payment",
        },
        {
          name: "Profile Form",
          href: "/docs/components/forms/profile",
          slug: "profile",
        },
        {
          name: "Review Form",
          href: "/docs/components/forms/review",
          slug: "review",
        },
        {
          name: "Subscription Form",
          href: "/docs/components/forms/subscription",
          slug: "subscription",
        },
      ],
    };
  return (
    <aside className="md:w-[260px] px-4 py-8 h-full overflow-scroll no-scrollbar">
      <div className="flex flex-col gap-8">
        {Object.keys(links).map((section) => (
          <div key={section} className="flex flex-col gap-1">
            <h2 className="text-sm font-bold p-1.5 rounded-lg">{section}</h2>
            <ul className="flex flex-col gap-1">
              {links[section as Section].map((link) => (
                <Link
                  href={link.href}
                  key={link.slug}
                  className="group relative flex h-8 w-full items-center text-sm rounded-lg px-2 hover:bg-accent "
                  prefetch={true}
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}

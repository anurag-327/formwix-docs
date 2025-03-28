import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "formwix",
  description: "A Dynamic Form Generating App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
              localStorage.getItem('theme') ==="dark" && document.documentElement.classList.add('dark') 
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className}`}>
        <Toaster />
        <Navbar />
        <main className="min-h-[90vh] mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

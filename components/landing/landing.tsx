import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Code, FileText, Layers, Package } from "lucide-react";
import CodePreviewSection from "./PreviewSection";
import { Button } from "../ui/button";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { CodeBlock } from "../ui/Codeblock";

export default function Landing() {
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto gap-12 ">
      <div className="flex flex-col items-center text-center space-y-4 py-8">
        <Badge className="mb-2" variant="outline">
          Open Source
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight">Formwix</h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          Configuration-based form builder for React applications
        </p>
        <div className="font-mono text-sm bg-gray-100 px-4 py-2  rounded border border-gray-200 inline-block">
          npm install formwix react-hook-form zod
        </div>
        <Button size="lg" className="mt-2">
          <a href="/docs">Get Started</a>
        </Button>
      </div>
      <Card className="overflow-hidden">
        <Tabs defaultValue="preview">
          <CardHeader className="pb-0">
            <div className="flex items-center justify-between">
              <CardTitle>Quick Start Example</CardTitle>
            </div>
            <CardDescription>
              Create a fully functional login form in minutes
            </CardDescription>
          </CardHeader>
          <CodePreviewSection />
        </Tabs>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Code size={18} /> Configuration Driven
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Define fields, validation, and behavior in a single config object.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Layers size={18} /> Built on Proven Foundations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Powered by React Hook Form & Zod with TypeScript support.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Package size={18} /> Complete Customization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Apply styles globally, per form, or at the individual field level
              to match your design system.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-[25px] shadow-sm border overflow-hidden">
          <div className="p-6 ">
            <h3 className="text-2xl font-bold mb-3">
              Get Started with FormWix
            </h3>
            <p className="mb-4 ">
              Install the package and start building beautiful forms in minutes.
            </p>
            <div className="bg-gray-100 inline-block rounded-lg px-4 py-2 font-mono text-sm mb-4">
              npm install formwix react-hook-form zod
            </div>
            <a
              href="/docs"
              className="bg-white underline text-sm w-fit text-indigo-600 font-medium py-2 px-6 rounded-lg flex items-center"
            >
              <Package size={16} className="mr-2" />
              View Documentation
            </a>
          </div>
        </div>
        <div className="bg-black rounded-[25px] shadow-md overflow-hidden">
          <div className="p-10 text-white">
            <h3 className="text-2xl font-bold mb-3">Open Source</h3>
            <p className="mb-4 text-gray-300">
              FormWix is free and open source, licensed under MIT. Contributions
              welcome!
            </p>
            <div className="flex gap-4 md:flex-row flex-col">
              <button className="bg-gray-700 hover:bg-gray-600 py-2 px-6 rounded-lg flex items-center">
                <GithubLogo size={18} className="mr-2" />
                Star on GitHub
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 py-2 px-6 rounded-lg">
                Become a Contributor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

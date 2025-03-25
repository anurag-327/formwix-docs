import { ArrowRight, Check } from "lucide-react";
import NpmCommandWithCopy from "./NpmCommandCopy";
import QuickstartExample from "./QuickstartExample";

export default async function FormwixMinimalFeatures() {
  return (
    <div className="container mx-auto leading-[1.65rem] md:px-16 ">
      <div className="flex flex-col ">
        <div className="md:min-h-[92vh] mt-12 md:mt-0 flex flex-col justify-center">
          <h3 className="text-xs mb-1.5 cursor-pointer font-medium underline-offset-4 hover:underline flex items-center">
            Get Started with v1 <ArrowRight size={14} className="ml-2" />
          </h3>
          <h1 className="font-extrabold text-5xl mb-3">Formwix</h1>
          <p className="text-muted-foreground text-sm">
            Configuration-based form builder for React applications
          </p>
          <div className="flex flex-col gap-2 mt-4 mb-12">
            <div className="flex w-full items-center justify-start gap-2 ">
              <a
                className="inline-flex bg-black dark:bg-zinc-800 text-white items-center justify-center gap-2 whitespace-nowrap font-medium h-7 px-3 text-xs rounded-md"
                href="/docs/installation"
              >
                Get Started
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium h-7 px-3 text-xs rounded-md"
                href="/docs/components/input"
              >
                Components
              </a>
            </div>
            <NpmCommandWithCopy />
          </div>
          <div className="grid grid-cols-1 max-w-4xl md:grid-cols-2 gap-4 mt-2 mb-6">
            <div className="flex items-start">
              <div className="mt-0.5 mr-2 bg-blue-50 dark:bg-zinc-800 p-1 rounded-full">
                <Check size={12} className="text-blue-600 dark:text-white" />
              </div>
              <div>
                <div className="text-sm font-medium">Configuration-Driven</div>
                <div className="text-xs text-gray-500">
                  Single config object for entire form definition
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mt-0.5 mr-2 bg-blue-50 dark:bg-zinc-800 p-1 rounded-full">
                <Check size={12} className="text-blue-600 dark:text-white" />
              </div>
              <div>
                <div className="text-sm font-medium">
                  Uncontrolled & Performant
                </div>
                <div className="text-xs text-gray-500">
                  Built on React Hook Form with minimal re-renders
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mt-0.5 mr-2 bg-blue-50 dark:bg-zinc-800 p-1 rounded-full">
                <Check size={12} className="text-blue-600 dark:text-white" />
              </div>
              <div>
                <div className="text-sm font-medium">Flexible Theming</div>
                <div className="text-xs text-gray-500">
                  Global, per-form, or field-level styling options
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mt-0.5 mr-2 bg-blue-50 dark:bg-zinc-800 p-1 rounded-full">
                <Check size={12} className="text-blue-600 dark:text-white" />
              </div>
              <div>
                <div className="text-sm font-medium">Type-Safe Validation</div>
                <div className="text-xs text-gray-500">
                  Zod integration for runtime and compile-time checks
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <QuickstartExample />
        </div>
      </div>
    </div>
  );
}

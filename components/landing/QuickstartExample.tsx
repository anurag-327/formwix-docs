import { CardDescription, CardHeader, CardTitle } from "../ui/card";
import CodePreviewSection from "./PreviewSection";

export default function QuickstartExample() {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">
            Quick Start Example
          </CardTitle>
        </div>
        <CardDescription className="text-sm -mt-0.5">
          Create a fully functional login in minutes
        </CardDescription>
      </div>
      <div className="mt-6 md:mt-0 md:scale-90">
        <CodePreviewSection />
      </div>
    </div>
  );
}

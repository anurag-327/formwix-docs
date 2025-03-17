"use client";
import { useEffect, useState } from "react";
import { Copy, Check, Clipboard } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CodeBlock({
  code,
  lang = "tsx",
}: {
  code: string;
  lang?: string;
}) {
  const [highlightedCode, setHighlightedCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    import("shiki").then(async (shiki) => {
      const highlighter = await shiki.createHighlighter({
        themes: ["ayu-dark"],
        langs: ["typescript"],
      });
      const codex = highlighter.codeToHtml(code, {
        theme: "ayu-dark",
        lang: "typescript",
      });
      setHighlightedCode(codex);
    });
  }, [code, lang]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <Card className="relative p-4 w-full text-base h-full overflow-x-auto bg-[#0D1117] rounded-lg border border-gray-700">
      {/* Copy Button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={handleCopy}
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white hover:bg-zinc-600 w-8 h-8 hover:text-white"
            >
              {copied ? (
                <Check size={16} className="text-green-400" />
              ) : (
                <Clipboard size={16} />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            {copied ? "Copied!" : "Copy to clipboard"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Code Block */}
      <pre className="whitespace-pre overflow-auto">
        {highlightedCode ? (
          <div
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
            className="font-mono"
          />
        ) : (
          <p className="text-white">Loading...</p>
        )}
      </pre>
    </Card>
  );
}

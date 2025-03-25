"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function NpmCommandWithCopy() {
  const [copied, setCopied] = useState(false);
  const commandText = "~ npm install formwix react-hook-form zod";
  const handleCopy = () => {
    navigator.clipboard.writeText(commandText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="w-fit tracking-tight font-normal text-gray-500 dark:text-gray-300 text-xs flex items-center justify-between group relative"
    >
      <div className="py-1 geist-mono rounded-full px-3 overflow-x-auto whitespace-nowrap">
        {commandText}
      </div>
      <div
        className="hidden transition-all duration-300 group-hover:flex  items-center justify-center h-full px-3 "
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <Check size={14} className="text-green-600" />
        ) : (
          <Copy size={14} />
        )}
      </div>
    </button>
  );
}

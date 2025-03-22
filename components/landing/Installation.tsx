import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Installation = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard!");

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section id="install" className="py-20 bg-secondary/50">
      <div className="container px-6 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4"
          >
            Installation
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Get started in seconds
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Install Formwix with your package manager of choice
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-950 rounded-xl overflow-hidden shadow-lg border border-border"
          >
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="ml-4 text-xs text-gray-500 dark:text-gray-400 font-mono">
                  Terminal
                </div>
              </div>
              <button
                onClick={() => copyToClipboard("npm i formwix")}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                aria-label="Copy to clipboard"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 bg-black text-white font-mono">
              <code>npm i formwix</code>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-6">
              After installation, import the components and styles:
            </p>

            <div className="bg-white dark:bg-gray-950 rounded-xl overflow-hidden shadow-lg text-left border border-border">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="ml-4 text-xs text-gray-500 dark:text-gray-400 font-mono">
                    MyForm.tsx
                  </div>
                </div>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `import { Formwix } from "formwix";\nimport "formwix/dist/formwix.css";`
                    )
                  }
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                  aria-label="Copy to clipboard"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4 overflow-x-auto">
                <pre className="text-xs md:text-sm font-mono">
                  <code className="language-typescript">
                    {`import { Formwix } from "formwix";
import "formwix/dist/formwix.css";`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Installation;

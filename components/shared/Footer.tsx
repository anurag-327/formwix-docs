import { FileText, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 max-w-6xl mt-6 mx-auto border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between mt-2">
        <div className="flex items-center text-muted-foreground space-x-2 mb-4 md:mb-0">
          <FileText size={16} />
          <div className="text-sm">
            <span>Maintained by</span>
            <a
              href="https://x.com/itsAnurag_sri"
              target="_blank"
              className=" hover:underline hover:text-blue-600"
            >
              <span> anurag-327</span>
            </a>
          </div>
        </div>
        <div className="flex space-x-4">
          <a
            href="/docs"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Documentation
          </a>
          <a
            href="https://github.com/anurag-327/formwix"
            target="_blank"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://npmjs.com/package/formwix"
            target="_blank"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            npm
          </a>
        </div>
      </div>
    </footer>
  );
}

import DocsSidebar from "@/components/docs/ui/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:w-[95%] h-[96vh] mx-auto flex  gap-4 md:gap-8">
      <DocsSidebar />
      <main className="flex-1 px-4 md:px-8 w-full overflow-scroll no-scrollbar">
        <div className="mt-8 h-full overflow-scroll no-scrollbar">
          {children}
        </div>
      </main>
    </div>
  );
}

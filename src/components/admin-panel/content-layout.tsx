import { Navbar } from "@/components/admin-panel/navbar";


interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function ContentLayout({ title, children }: ContentLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col">
        <Navbar title={title} />
        <div className="flex-1 container pt-8 pb-8 px-4 sm:px-8">
          {children}
        </div>
      </div>
      
    </div>
  );
}
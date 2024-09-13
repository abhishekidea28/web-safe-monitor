import NavBar from "@/modules/Navbar";
import Sidebar from "@/modules/Sidebar";
import { cn } from "@/Utilities/cn";

export default function Layout({ children, className }) {
  return (
    <div className={cn('flex h-screen', className="max-w-[1920px]")}>
      <Sidebar />
       
        <main className="flex flex-col flex-grow ml-64">
          {children}
        </main>
    </div>
  );
}

import NavBar from "@/modules/Navbar";
import Sidebar from "@/modules/Sidebar";
import { cn } from "@/Utilities/cn";

export default function Layout({ children, className }) {
  return (
    <div className={cn('flex h-screen', className)}>
      <Sidebar />
      <div className="flex flex-col flex-grow ml-64">
        <NavBar />
        <main className="flex-grow p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

import NavBar from "@/modules/Navbar";
import Sidebar from "@/modules/Sidebar";
import { cn } from "@/Utilities/cn";

export default function Layout({ children, className }) {
  return (
    <div className={cn('wrapper flex flex-wrap', className)}>
      <Sidebar />
       
        <div>
          {children}
        </div>
    </div>
  );
}

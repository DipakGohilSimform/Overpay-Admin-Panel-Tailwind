import Sidebar from "@/components/Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        {location.pathname !== "/" && <Sidebar />}
        <main className="flex-1 min-h-screen p-4 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

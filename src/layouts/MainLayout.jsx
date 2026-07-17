import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import { useApp } from "../context/AppContext";

const MainLayout = ({ children }) => {
  const { theme } = useApp();

  return (
    <div
      className={`flex h-screen overflow-hidden transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-950"
          : "bg-slate-100"
      }`}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main
          className={`flex-1 overflow-y-auto scroll-smooth transition-all duration-300
          px-4 py-5
          sm:px-6 sm:py-6
          lg:px-8 lg:py-8
          ${
            theme === "dark"
              ? "bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950"
              : "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200"
          }`}
        >
          <div className="mx-auto w-full max-w-[1600px]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
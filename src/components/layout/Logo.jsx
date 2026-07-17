import { LayoutDashboard } from "lucide-react";
import { useApp } from "../../context/AppContext";

const Logo = () => {
  const { theme } = useApp();

  return (
    <div
      className={`flex items-center gap-3 border-b px-6 py-6 transition-all duration-300 ${
        theme === "dark"
          ? "border-slate-700"
          : "border-slate-800"
      }`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
        <LayoutDashboard
          size={24}
          className="text-white"
        />
      </div>

      <div>
        <h1 className="text-lg font-bold tracking-wide text-white">
          Nexus
        </h1>

        <p className="text-xs text-slate-400">
          Enterprise Dashboard
        </p>
      </div>
    </div>
  );
};

export default Logo;
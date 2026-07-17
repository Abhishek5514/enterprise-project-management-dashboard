import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import { useApp } from "../../context/AppContext";

const Sidebar = () => {
  const { theme } = useApp();

  return (
    <aside
      className={`flex h-screen w-72 shrink-0 flex-col border-r transition-all duration-300 ${
        theme === "dark"
          ? "border-slate-800 bg-slate-950"
          : "border-slate-800 bg-slate-900"
      }`}
    >
      {/* Logo */}
      <div className="shrink-0">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Workspace
        </p>

        <div className="space-y-2">
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            title="Dashboard"
            to="/"
          />

          <SidebarItem
            icon={<FolderKanban size={20} />}
            title="Projects"
            to="/projects"
          />

          <SidebarItem
            icon={<CheckSquare size={20} />}
            title="Tasks"
            to="/tasks"
          />

          <SidebarItem
            icon={<Users size={20} />}
            title="Team"
            to="/team"
          />

          <SidebarItem
            icon={<BarChart3 size={20} />}
            title="Analytics"
            to="/analytics"
          />
        </div>

        <p className="mb-3 mt-8 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Account
        </p>

        <div className="space-y-2">
          <SidebarItem
            icon={<Settings size={20} />}
            title="Settings"
            to="/settings"
          />
        </div>
      </nav>

      {/* Logout */}
      <div
        className={`shrink-0 border-t p-4 ${
          theme === "dark"
            ? "border-slate-800"
            : "border-slate-800"
        }`}
      >
        <button
          type="button"
          aria-label="Logout"
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition-all duration-300 hover:bg-red-500/10 hover:text-red-400"
        >
          <LogOut size={20} />

          <span className="text-sm font-medium">
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
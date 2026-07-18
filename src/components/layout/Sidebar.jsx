import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  BarChart3,
  Settings,
  LogOut,
  X,
} from "lucide-react";

import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import { useApp } from "../../context/AppContext";

const Sidebar = ({ isOpen, onClose }) => {
  const { theme } = useApp();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-screen w-72 shrink-0 flex-col border-r transition-transform duration-300 ease-in-out lg:static lg:z-auto lg:translate-x-0 ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        } ${
          theme === "dark"
            ? "border-slate-800 bg-slate-950"
            : "border-slate-800 bg-slate-900"
        }`}
      >
        {/* Logo and Mobile Close Button */}
        <div className="relative shrink-0">
          <Logo />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Workspace
          </p>

          <div
            className="space-y-2"
            onClick={onClose}
          >
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

          <div
            className="space-y-2"
            onClick={onClose}
          >
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
    </>
  );
};

export default Sidebar;
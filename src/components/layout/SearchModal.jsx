import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  BarChart3,
  Settings,
  User,
  Search,
} from "lucide-react";

import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";

const pages = [
  {
    title: "Dashboard",
    path: "/",
    icon: <LayoutDashboard size={18} />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <FolderKanban size={18} />,
  },
  {
    title: "Tasks",
    path: "/tasks",
    icon: <CheckSquare size={18} />,
  },
  {
    title: "Team",
    path: "/team",
    icon: <Users size={18} />,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: <BarChart3 size={18} />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <Settings size={18} />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <User size={18} />,
  },
];

const SearchModal = ({
  searchQuery,
  setSearchQuery,
  onClose,
}) => {
  const navigate = useNavigate();
  const { theme } = useApp();

  const filteredPages = useMemo(() => {
    if (!searchQuery.trim()) return pages;

    return pages.filter((page) =>
      page.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleNavigate = (path) => {
    navigate(path);
    setSearchQuery("");
    onClose();
  };

  return (
    <div
      className={`absolute right-0 top-16 z-50 w-[420px] overflow-hidden rounded-2xl border shadow-2xl transition-all duration-300 ${
        theme === "dark"
          ? "border-slate-700 bg-slate-800"
          : "border-slate-200 bg-white"
      }`}
    >
      <div
        className={`border-b p-4 ${
          theme === "dark"
            ? "border-slate-700"
            : "border-slate-200"
        }`}
      >
        <div
          className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
            theme === "dark"
              ? "border-slate-600 bg-slate-900"
              : "border-slate-200 bg-white"
          }`}
        >
          <Search
            size={18}
            className={
              theme === "dark"
                ? "text-slate-400"
                : "text-slate-400"
            }
          />

          <input
            autoFocus
            type="text"
            placeholder="Search pages..."
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(e.target.value)
            }
            className={`w-full bg-transparent outline-none ${
              theme === "dark"
                ? "text-white placeholder:text-slate-400"
                : "text-slate-900"
            }`}
          />
        </div>
      </div>

      <div className="max-h-80 overflow-y-auto">
        {filteredPages.map((page) => (
          <button
            key={page.path}
            onClick={() =>
              handleNavigate(page.path)
            }
            className={`flex w-full items-center gap-3 px-5 py-4 text-left transition ${
              theme === "dark"
                ? "text-slate-300 hover:bg-slate-700"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            {page.icon}

            <span className="font-medium">
              {page.title}
            </span>
          </button>
        ))}

        {filteredPages.length === 0 && (
          <div
            className={`p-6 text-center ${
              theme === "dark"
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >
            No results found.
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;